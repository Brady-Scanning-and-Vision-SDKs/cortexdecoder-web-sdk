"use client"

import { useCallback, useEffect, useRef, useState } from "react";
import UploadIcon from "@/app/icons/IconUpload";
import Header from "../../components/header";
import styles from "../styles/imagescandemo.module.css";
import ResultDisplay from "../../components/resultdisplay";
import Image from "next/image";
import { CDDecoder, CDDecodeStatus, CDLicense, CDResult } from "codecorp-web_sdk";
 
export default function ImageScanDemo() {

    const [imgSrc, setImgSrc] = useState<string|null>(null)
    const [fileName, setFileName] = useState<string | null>(null)
    const [result, setResult] = useState<CDResult | null>(null);
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
            console.log(await CDLicense.activateLicense(process.env.NEXT_PUBLIC_DEMO_LICENSE as string));
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

    const imageImport =  async (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
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
                if(res[0].status == CDDecodeStatus.SUCCESS)
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
                <div className={styles.imagewrapper}>
                    {imgSrc !== null ? (
                        <Image
                        src={imgSrc}
                        alt="Imported Image"
                        id="imported-image"
                        fill
                        sizes="(max-width: 768px) 100vw, 150px"
                        style={{ objectFit: "contain", border: "1px solid black" }}
                        />
                    ) : (
                        <Image
                        src="/assets/images/upload-image-placeholder.jpg"
                        alt="Placeholder Image"
                        id="placeholder-image"
                        priority
                        fill
                        sizes="(max-width: 768px) 100vw, 150px"
                        style={{ objectFit: "contain", border: "1px solid black" }}
                        />
                    )}
                    <label
                        className={styles.uploadButton}
                        aria-label="Upload Image"
                        htmlFor="file-input"
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