'use client'

import { useEffect } from "react";
import styles from "./styles/page.module.css";
import { useRouter } from "next/navigation";
 
export default function CameraScanPage() {
    const router = useRouter();

    const handleNavigation = () => {
      router.push("/CameraScanDemo"); // Navigates to the specified route
    };

    useEffect(()=>{
      if (window.innerWidth <= 768) { 
        window.scrollTo({
          top: document.body.scrollHeight, 
          behavior: "smooth",
        });
      }
    },[])

    return (
        <div className={styles.container}>
            <h1 className={styles.heading1}>Camera Scan</h1>
            <p className={styles.paragraph}>Camera Scan app gets access to the camera resource of the device and scans each frame to find a code. This app also offers functionality to set the resolution, focus and zoom for the video input.</p>
            <button onClick={handleNavigation} className={styles.button}>Start Camera Scan Demo</button>
        </div>
    );
  }