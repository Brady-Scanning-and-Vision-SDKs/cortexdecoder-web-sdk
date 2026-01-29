import FacebookIcon from '../../icons/IconFacebook'
import LinkedInIcon from '../../icons/IconLinkedIn'
import YouTubeIcon from '../../icons/IconYouTube'
import styles from "../styles/follow_links.module.css";


export default function FollowLinks(){
    return(
        <div >
            <h3 className={styles.followLinks}>
                <a className='anchor' target="_blank" href="https://www.facebook.com/code411" rel="noopener">
                    <FacebookIcon />
                </a>
                <a className='anchor' target="_blank" href="https://www.linkedin.com/company/code-corporation" rel="noopener">
                    <LinkedInIcon />
                </a>
                <a className='anchor' target="_blank" href="https://www.youtube.com/channel/UCpCKNpE3JGQLi-Dec0B6fkw" rel="noopener">
                    <YouTubeIcon />
                </a>
            </h3>
        </div>
    )
}