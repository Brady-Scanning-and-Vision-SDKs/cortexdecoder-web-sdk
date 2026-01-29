import FacebookIcon from '../../icons/IconFacebook'
import LinkedInIcon from '../../icons/IconLinkedIn'
import YouTubeIcon from '../../icons/IconYouTube'
import styles from "./styles/FollowLinks.module.css";


export default function FollowLinks(){
    return(
        <div >
            <h3 className={styles.followLinks}>
                <a className='anchor' target="_blank" href="https://www.facebook.com/code411" rel="noreferrer">
                    <FacebookIcon />
                </a>
                <a className='anchor' target="_blank" href="https://www.linkedin.com/company/code-corporation" rel="noreferrer">
                    <LinkedInIcon />
                </a>
                <a className='anchor' target="_blank" href="https://www.youtube.com/channel/UCpCKNpE3JGQLi-Dec0B6fkw" rel="noreferrer">
                    <YouTubeIcon />
                </a>
            </h3>
        </div>
    )
}