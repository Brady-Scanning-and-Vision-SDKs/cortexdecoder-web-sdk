import { useEffect } from "react";
import styles from "./styles/CameraScanIntro.module.css";
import { useNavigate } from "react-router-dom";

export default function CameraScanIntro() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/CameraScanDemo"); // React Router navigation
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
      <h1 className={styles.heading1}>Camera Scan</h1>
      <p className={styles.paragraph}>
        Camera Scan app gets access to the camera resource of the device and
        scans each frame to find a code. This app also offers functionality to
        set the resolution, focus and zoom for the video input.
      </p>
      <button onClick={handleNavigation} className={styles.button}>
        Start Camera Scan Demo
      </button>
    </div>
  );
}
