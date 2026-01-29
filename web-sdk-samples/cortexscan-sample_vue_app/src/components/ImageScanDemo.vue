
<script lang="ts" setup>
    import Header from './HeaderDemo.vue';
    import {computed, ref} from 'vue'
    import UploadIcon from './icons/IconUpload.vue'
    import { CDDecoder, CDResult } from 'codecorp-web_sdk';
    import ResultDisplay from './ResultDisplay.vue';
    import UploadImage from '../assets/images/upload-image-placeholder.jpg';

    const imgSrc = ref<string | null>(null);
    const fileName = ref<string | null>(null)
    const result = ref<CDResult[]>([]);
    const resultData = computed(() => result.value[0] ? result.value[0] : null);

    const imageImport = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];

      if (file && file.type.startsWith('image/')) {
        fileName.value = file.name
        result.value = []
        // Create a URL for the selected image file
        imgSrc.value = URL.createObjectURL(file);
        console.log('Image file selected:', file);
      } else {
        console.log('Please select an image file.');
      }
    };

    const decodeImage = async ()=>{
      if(imgSrc.value !== null)
      result.value = await CDDecoder.decode(imgSrc.value)
    }

</script>

<template>
    <div class="container">
      <Header headerText="Image Scan Demo"/>
      <div class="scrollable-content">
          <div class="image-wrapper">
            <!-- <img v-if="imgSrc" :src="imgSrc" alt="Imported Image" id="imported-image" style="border: 1px solid black; width: 100%; height: 100%;" />
            <img v-else :src="UploadImage" alt="Imported Image" id="imported-image" style="border: 1px solid black; width: 100%; height: 100%;" /> -->
            <img v-if="imgSrc" :src="imgSrc" alt="Imported Image" id="imported-image" style="border: 1px solid black; width: 100%; height: 100%;" />
            <img v-else :src="UploadImage" alt="Placeholder Image" id="placeholder-image" style="border: 1px solid black; width: 100%; height: 100%;" />
        

            <!-- <button class="uploadButton" aria-label="Upload Image">
                <UploadIcon/>
            </button> -->
            <label class="uploadButton" aria-label="Upload Image">
              <UploadIcon />
              <!-- Hidden file input field -->
              <input type="file" accept="image/*,.pdf" @change="imageImport" style="display: none;" />
            </label>
          </div>
          
          <p>
            {{ fileName }}
          </p>

          <button class="scanButton" @click="decodeImage" aria-label="scan">
            SCAN
          </button>
          <ResultDisplay v-if="resultData" :result="resultData" />
      </div>

    </div>
      
</template>
  
<style scoped>
  .container {
    position: fixed;       /* Fixes the element relative to the viewport */
    top: 0;                /* Positions at the top of the viewport */
    left: 0;               /* Positions at the left of the viewport */
    width: 100vw;          /* Full viewport width */
    height: 100vh;         /* Full viewport height */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    z-index: 1000;         /* Ensures it sits on top of other elements */
  }
  
  /* Style for the header */
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
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

  .image-wrapper {
    position: relative;
    width: 50%;
    height: 60vh;
    /* max-height: 50%; */
    margin-bottom: 1rem;
    border: 2px solid #AE2025;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: none;
  }

  .scanButton {
    margin-top: 1rem;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #AE2025;
    color: white;
    transition: background-color 0.3s ease;
  } 

  .scanButton:hover {
    background-color: #91191B;
  } 

  .uploadButton {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    border: none;
    padding: 0;
    opacity: 0.2;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }

  .uploadButton:hover {
    opacity: 0.8;
  }

  .uploadButton svg {
    width: 3rem;
    height: 3rem;
    color: #AE2025;           
  }
</style>