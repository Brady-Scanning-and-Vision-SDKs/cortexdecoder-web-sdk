import React from "react";
import styles from "./styles/HomeItem.module.css";

const WelcomeItem = ({ icon, heading, children }) => {
    return(
      <div className={styles.item}>
          <i className={styles.icon}>{icon}</i>
          <div className={styles.details}>
              <h3 className={styles.heading3}>{heading}</h3>
              {children}
          </div>
      </div>
    )
}

export default WelcomeItem;
