import Image from 'next/image';


export default function YouTubeIcon() {
    return(
        <div>
            <Image 
                src="/assets/icons/youtube.svg" 
                alt="YouTube Icon" 
                width={20} 
                height={20} 
            />
        </div>
    )
}
