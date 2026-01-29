import WelcomeItem from './welcome_item'
import DocumentationIcon from '../../icons/IconDocumentation'
import ToolingIcon from '../../icons/IconTooling'
import EcosystemIcon from '../../icons/IconEcosystem'
import CommunityIcon from '../../icons/IconCommunity'
import styles from "../styles/welcome.module.css"

export default function Welcome(){
    return(
        <div className={styles.items}>
            <WelcomeItem 
                icon={<DocumentationIcon />} 
                heading="Documentation"
            >
                View our{' '}
                <a href="https://nexgen-docs.netlify.app/" target="_blank" rel="noopener">
                    official documentation
                </a>. It provides you with all the information you need to get started.
            </WelcomeItem>


            <WelcomeItem
                icon={<ToolingIcon />} 
                heading="About"
            >
                Web SDK uses WebRTC to access the device camera. Hence it requires HTTPS (secure connection) or localhost.
                Our SDK is delivered as an NPM package and can be installed on both client-side and server-side JavaScript.
            </WelcomeItem>
            <WelcomeItem
                icon={<ToolingIcon />} 
                heading="Browser Support"
            >
                The SDK has support on all popular browsers on both Android and IOS. Please see our browser support documentation here.

                <br />

                <a href="https://nexgen-docs.netlify.app/qsg/Web/web%20v.2#requirements" target="_blank" rel="noopener"
                >Browser Support</a>
            </WelcomeItem>
            <WelcomeItem
                icon={<EcosystemIcon />} 
                heading="Release Notes"
            >
                Get our updated release notes here:
                <a href="https://nexgen-docs.netlify.app/release/web" target="_blank" rel="noopener"> Web SDK Release Notes</a>
            </WelcomeItem>
            <WelcomeItem
                icon={<CommunityIcon />} 
                heading="Quick Start this app"
            >
                <ul>
                    <li>
                        <h3>Project Setup</h3>
                        <code>
                            npm install
                        </code>
                    </li>
                    <li>
                        <h3>Compile and Hot-Reload for Development</h3>
                        <code>
                            npm run dev
                        </code>
                    </li>
                    <li>
                        <h3>Type-Check, Compile and Minify for Production</h3>
                        <code>
                            npm run build
                        </code>
                    </li>
                </ul>
            </WelcomeItem>
        </div>
    )
}
