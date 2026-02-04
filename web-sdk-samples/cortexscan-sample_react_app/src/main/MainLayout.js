import styles from "./styles/MainLayout.module.css";
import { Link } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import ContactLinks from "./components/ContactLinks";
import React from "react";

const MainLayout =({ children }) => {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftcontent}>
        <Link to="/" className={styles.logoLink}>
          <div className={styles.logoContainer}>
            <img 
              src={process.env.PUBLIC_URL + "/assets/CodeBrady-logo.png"} 
              alt="Code Logo" 
              className={styles.logo} 
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
          </div>
        </Link>

        <div className={styles.wrapper}>
          <IntroPage msg="Welcome to CortexScan React App!" />
          <nav className={styles.nav}>
            <Link to="/CameraScanIntro" className={styles.navLink}>
              Camera Scan
            </Link>
            <Link to="/ImageScanIntro" className={styles.navLink}>
              Image Scan
            </Link>
          </nav>
          <ContactLinks />
        </div>
      </div>

      {/* Right Section */}
      <main className={styles.rightContent}>{children}</main>
    </div>
  );
};

export default MainLayout;
