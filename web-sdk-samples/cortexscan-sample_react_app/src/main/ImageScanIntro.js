import { useEffect } from "react";
import styles from "./styles/ImageScanIntro.module.css";
import { useNavigate } from "react-router-dom";

export default function ImageScanIntro() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/ImageScanDemo"); // React Router navigation
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Image Scan</h1>
      <p className={styles.paragraph}>
        Image Scan app allows the user to upload an image from the device. This image is decoded and the result is printed. Image scan offers settings to set exactly how many codes to decode.
      </p>
      <button onClick={handleNavigation} className={styles.button}>
        Start Image Scan Demo
      </button>
    </div>
  );
}
