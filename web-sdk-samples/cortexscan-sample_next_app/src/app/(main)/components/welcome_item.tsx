import React, { ReactNode } from "react";
import styles from "../styles/welcome_item.module.css";

interface WelcomeItemProps {
  icon: ReactNode; // For React elements like components or HTML elements
  heading: ReactNode; // Typically a string or React element
  children: ReactNode; // Content nested inside the component
}

const WelcomeItem: React.FC<WelcomeItemProps> = ({ icon, heading, children }) => {
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
