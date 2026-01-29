
<script setup lang="ts">
    import { ref , onMounted, onBeforeUnmount, watch, computed } from 'vue';
    import { CDCamera, CDResult, CDDecodeStatus, CDPosition } from 'codecorp-web_sdk'
    import PauseIcon from './icons/IconPause.vue'
    import PlayIcon from './icons/IconPlay.vue'
    import Header from './HeaderDemo.vue';
    import ResultDisplay from './ResultDisplay.vue'


    const videoRef = ref<HTMLVideoElement | null>(null);
    const canvasRef = ref<HTMLVideoElement | null>(null);
    const isPlaying = ref(true);

    const isMounted = ref(false);
    const result = ref<CDResult[]>([]);
    const resultData = computed(() => result.value[0] ? result.value[0] : null);
    const connectedCameras = ref<MediaDeviceInfo[]>([])
    const cameraPositions = ref<CDPosition[]>()
    const selectedCamera = ref<MediaDeviceInfo>()
    const selectedCameraPosition = ref<CDPosition>()

    const startCamera = async () => {
      if (isMounted.value && videoRef.value) {
        await CDCamera.init(videoRef.value);
        connectedCameras.value = CDCamera.getConnectedCameras()
        cameraPositions.value =  Object.values(CDPosition).slice(0, 3) as CDPosition[]
        await CDCamera.startCamera();
        await CDCamera.startPreview(grabResult);
        selectedCamera.value = CDCamera.getCamera() as MediaDeviceInfo
        const cameraPosition = CDCamera.getCameraPosition() as {position: CDPosition;autoSwitch: boolean;}
        selectedCameraPosition.value = cameraPosition.position
      } else {
        console.error("Video element is not available");
      }
    };

    const togglePlayPause = () => {
      isPlaying.value = !isPlaying.value;
      if (isPlaying.value) {
        CDCamera.startPreview(grabResult).then(()=>{
          selectedCamera.value = CDCamera.getCamera()
          const cameraPosition = CDCamera.getCameraPosition() as {position: CDPosition;autoSwitch: boolean;}
          selectedCameraPosition.value = cameraPosition.position
        })
      } else {
        CDCamera.stopPreview()
        selectedCamera.value = CDCamera.getCamera()
        const cameraPosition = CDCamera.getCameraPosition() as {position: CDPosition;autoSwitch: boolean;}
        selectedCameraPosition.value = cameraPosition.position
      }
    };

    const stopCamera = async () =>{
      await CDCamera.stopCamera()
    } 

    const grabResult = (res : CDResult[])=>{
      if(res[0].status == CDDecodeStatus.SUCCESS)
        result.value = res
    }

    const changeCameraPosition = async (position : CDPosition)=>{
      isPlaying.value = !isPlaying.value;
      try{
        await CDCamera.setCameraPosition(position, false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }catch(e : any){
        console.log(e.message)
      }
      selectedCameraPosition.value = position
    }

    const changeCamera = async (device: MediaDeviceInfo) => {
      isPlaying.value = !isPlaying.value;
      try{
        await CDCamera.setCamera(device)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }catch(e : any){
        console.log(e.message)
      }
      selectedCamera.value = device
    };

    watch(result, () => {
      // console.log(result.value[0].barcodeData); // This will now print whenever result.value changes
    });

    onMounted(() => {
      isMounted.value = true;
      startCamera()
    });

    onBeforeUnmount(()=>{
      stopCamera()
    })
</script>

<template>
    <div class="container">
      <Header headerText="Camera Scan Demo"/>
      <div class="scrollable-content">
          <div class="video-wrapper">
            <div class="dropdown-container">
              <div class="dropdown-group">
                <label for="camera-devices" class="dropdown-label">Select Camera Device</label>
                <select id="camera-devices" class="setCamera-devices" aria-label="Select camera dropdown" @change="changeCamera(($event.target as HTMLSelectElement).value as unknown as MediaDeviceInfo)" v-model="selectedCamera">
                  <option v-for="camera in connectedCameras" :key="camera.deviceId" :value="camera">
                    {{ camera.label }}
                  </option>
                </select>
              </div>
              <div class="dropdown-group">
                <label for="camera-position" class="dropdown-label">Select Camera Position</label>
                <select id="camera-position" class="setCamera-position" aria-label="Select camera position dropdown" @change="changeCameraPosition(($event.target as HTMLSelectElement).value as unknown as CDPosition)" v-model="selectedCameraPosition">
                  <option v-for="position in cameraPositions" :key="position" :value="CDPosition[position]">
                    {{ position }}
                  </option>
                </select>
              </div>
            </div>
            <video ref="videoRef" playsInline width="100%" height="100%" id="video" style="border: 1px solid black;"></video>
            <canvas ref="canvasRef" width="100%" height="100%" id="canvas"></canvas>
            <button class="pauseButton" @click="togglePlayPause" aria-label="Pause">
              <PlayIcon v-if="!isPlaying" />
              <PauseIcon v-if="isPlaying" />
            </button>
          </div>
        <ResultDisplay v-if="resultData" :result="resultData" />
      </div>
    </div>  
</template>
  
<style scoped>
   .container {
    position: fixed;       
    top: 0;                
    left: 0;               
    width: 100vw;          
    height: 100vh;
    margin-top: 1.5rem;         
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white; 
    z-index: 1000; 
    overflow-y: auto;        
  } 

  .scrollable-content {
    width: 100%;
    height: calc(100vh - 200px); 
    overflow-y: auto;
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .video-wrapper {
    position: relative;       
    width: 50%;               
    border: 2px solid #AE2025;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  video {
    width: 100%;
    height: 100%;
    display: block;
    border: none;           
    object-fit: cover;
  }

  canvas {
    position: absolute;       
    top: 0;
    left: 0;
    width: 100%;              
    height: 100%;
    pointer-events: none;  
    object-fit: cover;
    
  }

  .pauseButton {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8rem;           
    height: 8rem;
    transform: translate(-50%, -50%);
    background: transparent;
    padding: 0;
    opacity: 0.2;
    cursor: pointer;
    transition: opacity 0.3s ease;
    border: none;
  }

  .pauseButton:hover {
    opacity: 0.8;
  }

  .pauseButton svg {
    width: 100%;            
    height: 100%;           
  }

  .dropdown-container {
    position: absolute;  
    top: 0; 
    width: 100%; 
    display: flex;
    justify-content: space-between;
    z-index: 2;           
    padding: 0 1rem;
  }

  .dropdown-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .dropdown-label {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 2px;
    color: white;  
    text-shadow: 0px 2px 4px #AE2025;
       
  }

  .setCamera-devices, .setCamera-position {
    padding: 0.5rem 1rem;             
    font-size: 1rem;                  
    border: 1px solid #ccc;           
    border-radius: 4px;               
    background-color: #f8f6f6;        
    color: #AE2025;                      
    cursor: pointer;                  
    transition: border-color 0.3s, box-shadow 0.3s; 
  }

  .setCamera-devices:hover, .setCamera-position:hover,
  .setCamera-devices:focus, .setCamera-position:focus {
    border-color: #AE2025;            /* Highlight border on hover/focus */
    box-shadow: 0 0 5px rgba(174, 32, 37, 0.5); /* Adds a shadow effect */
    outline: none;                    /* Removes default outline */
  }

  @media (max-width: 768px) {
    /* Make dropdowns take full width on small screens */
    .dropdown-container {
      flex-direction: column; /* Stack dropdowns vertically on mobile */
      align-items: stretch;
    }

    .setCamera-devices, .setCamera-position {
      font-size: 1.2rem;        /* Larger font size for readability */
      padding: 0.8rem 1rem;     /* Extra padding for touch-friendliness */
      border-radius: 0;         /* Remove rounded corners for simplicity */
      box-shadow: none;         /* Remove box-shadow for a cleaner look */
      margin-bottom: 0.5rem;    /* Space between stacked dropdowns */
    }

    .dropdown-label {
      visibility: hidden;
      font-size: 1.1rem;        /* Slightly larger labels for mobile */
      margin-bottom: 0.2rem;    /* Less space to fit better on mobile */
    }
  }

  
  /* button {
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #AE2025;
  color: white;
  transition: background-color 0.3s ease;
} */

  /* button:hover {
    background-color: #91191B;
  } */
</style>