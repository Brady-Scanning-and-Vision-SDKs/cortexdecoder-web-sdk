import React from "react";
import styles from "../styles/intro_page.module.css";

interface IntroPageProps {
  msg: string;
}

const IntroPage: React.FC<IntroPageProps> = ({ msg }) => {
  return(
    <div className={styles.headings}>
      <h1 className={styles.redheading}>{ msg }</h1>
      <h3 className={styles.heading3}>
        Check out our decoding capabilities!
      </h3>
    </div>
  )
}

export default IntroPage
