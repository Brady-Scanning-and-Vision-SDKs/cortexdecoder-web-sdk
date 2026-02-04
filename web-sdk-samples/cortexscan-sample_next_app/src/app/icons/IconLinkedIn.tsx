import Image from 'next/image';

export default function LinkedInIcon() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return(
        <div>
            <Image 
                src={`${basePath}/assets/icons/linkedin.svg`} 
                alt="LinkedIn Icon" 
                width={20} 
                height={20} 
            />
        </div>
    )
}