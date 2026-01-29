'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/header";
import styles from "./styles/CameraScanDemo.module.css";
import { CDCamera, CDDecoder, CDDecodeStatus, CDLicense, CDPosition } from "codecorp-web_sdk";
import PauseIcon from "../icons/IconPause";
import PlayIcon from "../icons/IconPlay";
import ResultDisplay from "./components/resultdisplay";
 
export default function CameraScanDemo() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const isMounted = useRef(false);

    const [isDecoderActivated, setDecoderActivated] = useState(false);
    const [result, setResult] = useState(null);
    const [connectedCameras, setConnectedCameras] = useState([]);
    const [cameraPositions, setCameraPositions] = useState([]);
    const [isPlaying, setIsPlaying] = useState(true);
    const [selectedCamera, setSelectedCamera] = useState(null);
    const [selectedCameraPosition, setSelectedCameraPosition] = useState(CDPosition.BACK)

    const initializeDecoder = useCallback(async () => {
        try {
            await CDDecoder.init(".")
        } catch (error) {
            console.error("Error initializing decoder:", error);
        }
    }, []);

    const activateLicense = useCallback(async () => {
        try {
            console.log(await CDLicense.activateLicense(process.env.REACT_APP_DEMO_LICENSE));
        } catch (error) {
            console.error("Error activating license:", error);
        }
      }, []);
    
    const startCamera = useCallback(async () => {
        try{
            if (isMounted.current && videoRef.current) {
                await CDCamera.init(videoRef.current);
                setConnectedCameras(CDCamera.getConnectedCameras())
                setCameraPositions(Object.values(CDPosition).slice(0, 3))
                await CDCamera.startCamera();
                await CDCamera.startPreview(grabResult);
                setIsPlaying(true)
                setSelectedCamera(CDCamera.getCamera())
                const cameraPosition = CDCamera.getCameraPosition();
                setSelectedCameraPosition(cameraPosition.position)
    
            } else {
                console.error("Video element is not available");
            }
        }catch(error){
            console.error("Error starting camera:", error);
        }
    }, []);

    useEffect(() => {
        isMounted.current = true;
    
        const initializeAndActivate = async () => {
          try {
                await initializeDecoder();
                await activateLicense();
                if (isMounted.current) {
                    setDecoderActivated(true); 
                }
            } catch (error) {
                console.error("Error during initialization and activation:", error);
            }
        };
    
        initializeAndActivate();
    
        return () => {
            CDCamera.stopCamera()
            isMounted.current = false;
        };
    }, [initializeDecoder, activateLicense]);

    useEffect(() => {
        if (isDecoderActivated) { 
          startCamera();
        }
    }, [isDecoderActivated , startCamera]);

    const grabResult = (res) => {
        if(res[0].status === CDDecodeStatus.SUCCESS)
            setResult(res[0])
    }

    const togglePlayPause = () => {
        setIsPlaying((value)=>!value)
        if (!isPlaying) {
          CDCamera.startPreview(grabResult).then(()=>{
            setSelectedCamera(CDCamera.getCamera())
            const cameraPosition = CDCamera.getCameraPosition()
            setSelectedCameraPosition(cameraPosition.position)
          })
        } else {
          CDCamera.stopPreview()
          setSelectedCamera(CDCamera.getCamera())
          const cameraPosition = CDCamera.getCameraPosition()
          setSelectedCameraPosition(cameraPosition.position)
        }
      };

    async function handleSetCamera(event) {
        const deviceId = event.target.value

        const device = connectedCameras.find((camera)=>camera.deviceId === deviceId)
        setIsPlaying((value)=>!value);
        try{
          await CDCamera.setCamera(device)
        }catch(error){
          console.error(error)
        }
        setSelectedCamera(device)
    }

    async function handleSetCameraPosition(event) {
        const position = parseInt(event.target.value)
        setIsPlaying((value)=>!value);
        try{
            await CDCamera.setCameraPosition(position, false)
        }catch(error){
            console.error(error)
        }
        setSelectedCameraPosition(position)
    }

    return (
        <div className={styles.container}>
            <Header headerText={"Camera Scan Demo"}/>
            <div className={styles.dropdowncontainer}>
                <div className={styles.dropdowngroup}>
                    <label htmlFor="camera-devices" className={styles.dropdownlabel}>Select Camera Device</label>
                    <select id="camera-devices" className={styles.setCameradevices} aria-label="Select camera dropdown" value={selectedCamera?.deviceId} onChange={handleSetCamera}>
                        {connectedCameras.length > 0 ? (
                            connectedCameras.map((camera) => (
                                <option key={camera.deviceId} value={camera.deviceId}>
                                {camera.label || "Unknown Camera"}
                                </option>
                            ))
                            ) : (
                            <option value="" disabled>
                                No cameras available
                            </option>
                        )}
                    </select>
                </div>
                <div className={styles.dropdowngroup}>
                    <label htmlFor="camera-position" className={styles.dropdownlabel}>Select Camera Position</label>
                    <select id="camera-position" className={styles.setCameraposition} aria-label="Select camera position dropdown" value={selectedCameraPosition} onChange={handleSetCameraPosition}>
                        {cameraPositions.length > 0 ? (
                            cameraPositions.map((cameraPosition) => (
                                <option key={cameraPosition} value={CDPosition[cameraPosition]}>
                                    {cameraPosition}
                                </option>
                            ))
                            ) : (
                            <option value="" disabled>
                                No camera positions available
                            </option>
                        )}
                    </select>
                </div>
            </div>
            <div className={styles.scrollablecontent}>
                <div className={styles.videowrapper}>
                    <video ref={videoRef} className={styles.videoElement}  playsInline id="video"></video>
                    <canvas ref={canvasRef} className={styles.canvasElement}  width="100%" height="100%" id="canvas"></canvas>
                    <button className={styles.pauseButton} onClick={togglePlayPause} aria-label="Pause">
                        {isPlaying ? <PauseIcon/>:<PlayIcon/>}
                    </button>
                </div>
                <ResultDisplay result={result}/>
            </div>
        </div>
    );
}