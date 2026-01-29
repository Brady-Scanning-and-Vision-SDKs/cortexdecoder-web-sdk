'use client'

import { useEffect } from "react";
import styles from "./styles/page.module.css";
import { useRouter } from "next/navigation";

export default function ImageScanPage() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/ImageScanDemo"); // Navigates to the specified route
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
      <h1 className={styles.heading1}>Image Scan</h1>
      <p className={styles.paragraph}>Image Scan app allows the user to upload an image from the device. This image is decoded and the result is printed. Image scan offers settings to set exactly how many codes to decode.</p>
      <button onClick={handleNavigation} className={styles.button}>Start Image Scan Demo</button>
    </div>
  );
}