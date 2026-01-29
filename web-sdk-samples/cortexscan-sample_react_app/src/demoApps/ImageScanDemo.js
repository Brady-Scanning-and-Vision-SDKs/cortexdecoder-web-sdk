"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import UploadIcon from "../icons/IconUpload";
import Header from "./components/header";
import styles from "./styles/ImageScanDemo.module.css";
import ResultDisplay from "./components/resultdisplay";
import { CDDecoder, CDDecodeStatus, CDLicense } from "codecorp-web_sdk";
 
export default function ImageScanDemo() {

    const [imgSrc, setImgSrc] = useState(null)
    const [fileName, setFileName] = useState(null)
    const [result, setResult] = useState(null);
    const [isDecoderActivated, setDecoderActivated] = useState(false);
    const isMounted = useRef(false);

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
            isMounted.current = false;
        };
    }, [initializeDecoder, activateLicense]);

    const imageImport =  async (event) => {
        const target = event.target;
        const file = target.files?.[0];
  
        if (file && file.type.startsWith('image/')) {
            setFileName(file.name)
            setResult(null)
            // Create a URL for the selected image file
            setImgSrc(URL.createObjectURL(file));
        } else {
            console.log('Please select an image file.');
        }
    };
  
    const decodeImage = async ()=>{
        if(isDecoderActivated){
            if(imgSrc !== null){
                const res = await CDDecoder.decode(imgSrc)
                if(res[0].status === CDDecodeStatus.SUCCESS)
                    setResult(res[0])
            }
        }else{
            console.error("Decoder not activated")
        }    
    }

    return (
        <div className={styles.container}>
            <Header headerText={"Image Scan Demo"}/>
            <div className={styles.scrollablecontent}>
                <div className={styles.imagewrapper} style={{ position: "relative", height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {imgSrc && (
                        <img
                            src={imgSrc}
                            alt="Imported"
                            id="imported-image"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                                border: "1px solid black",
                                display: "block"
                            }}
                        />
                    )}
                    <label
                        className={styles.uploadButton}
                        aria-label="Upload Image"
                        htmlFor="file-input"
                        style={{ position: "absolute", bottom: "10px", right: "10px" }}
                    >
                        <UploadIcon />
                        <input
                        id="file-input"
                        type="file"
                        accept="image/*,.pdf"
                        style={{ display: "none" }}
                        onChange={imageImport}
                        />
                    </label>
                </div>
                
                <p>
                    { fileName }
                </p>

                <button className={styles.scanButton} onClick={decodeImage} aria-label="scan">
                    SCAN
                </button>
                <ResultDisplay result={result}/>
            </div>

        </div>
    );
}