import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/header.module.css"

const Header = ({ headerText }) => {
    return(
        <header className={styles.header}>
            <Link to="/" className={styles.logoLink}>
                <div className={styles.logoContainer}>
                    <img 
                    src="/assets/CodeBrady-logo.png" 
                    fill="true"
                    sizes="(max-width: 768px) 100vw, 150px"
                    style={{objectFit:"contain"}}
                    alt="Code Logo" 
                    priority="true"
                    className={styles.logo} 
                    />
                </div>
            </Link>
            <div className={styles.headertext}>
            <h1 className={styles.header1}>{headerText}</h1>
            </div>
            <a className={styles.contactlink} target="_blank" href="https://codecorp.com/contact" rel="noreferrer">Contact Us</a>
        </header>
    )
}

export default Header