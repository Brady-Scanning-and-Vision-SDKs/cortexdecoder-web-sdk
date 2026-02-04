import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css"

interface HeaderProps {
    headerText: string;
}

const Header: React.FC<HeaderProps> = ({ headerText }) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
                <div className={styles.logoContainer}>
                    <Image 
                    src={`${basePath}/assets/CodeBrady-logo.png`} 
                    fill
                    sizes="(max-width: 768px) 100vw, 150px"
                    style={{objectFit:"contain"}}
                    alt="Code Logo" 
                    priority
                    className={styles.logo} 
                    />
                </div>
            </Link>
            <div className={styles.headertext}>
            <h1 className={styles.header1}>{headerText}</h1>
            </div>
            <a className={styles.contactlink} target="_blank" href="https://codecorp.com/contact" rel="noopener">Contact Us</a>
        </header>
    )
}

export default Header