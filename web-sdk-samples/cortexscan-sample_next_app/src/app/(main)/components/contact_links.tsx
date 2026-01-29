import FollowLinks from "./follow_links";
import styles from "../styles/contact_links.module.css";

export default function ContactLinks(){
  return(
    <div className={styles.headings}>
      <h3 className="heading3">
        What&apos;s next? 
        <a target="_blank" href="https://codecorp.com/contact" rel="noopener" style={{color : "#AE2025"}}>Contact Us</a>
      </h3>
      <h2 className="heading2">
        Also, 
      </h2>
      <h3 className="heading3">
        Follow Us! 
      </h3>
      <FollowLinks/>
      
    </div>
  )
}
