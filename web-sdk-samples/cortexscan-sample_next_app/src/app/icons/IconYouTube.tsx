import Image from 'next/image';


export default function YouTubeIcon() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return(
        <div>
            <Image 
                src={`${basePath}/assets/icons/youtube.svg`} 
                alt="YouTube Icon" 
                width={20} 
                height={20} 
            />
        </div>
    )
}
