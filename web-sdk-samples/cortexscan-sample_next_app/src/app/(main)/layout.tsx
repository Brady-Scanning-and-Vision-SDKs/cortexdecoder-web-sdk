import styles from "./layout.module.css";
import Image from "next/image";
import Link from "next/link";
import IntroPage from "./components/IntroPage";
import ContactLinks from "./components/contact_links";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode; // Content nested inside the component
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftcontent}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoContainer}>
            <Image 
              src="/assets/CodeBrady-logo.png" 
              fill
              sizes="(max-width: 768px) 100vw, 150px"
              style={{objectFit:"contain"}}
              alt="Code Logo" 
              className={styles.logo} 
            />
          </div>
        </Link>

        <div className={styles.wrapper}>
          <IntroPage msg="Welcome to CortexScan Next.js App!" />
          <nav className={styles.nav}>
            <Link href="/CameraScanIntro" className={styles.navLink}>
              Camera Scan
            </Link>
            <Link href="/ImageScanIntro" className={styles.navLink}>
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
}

export default MainLayout
