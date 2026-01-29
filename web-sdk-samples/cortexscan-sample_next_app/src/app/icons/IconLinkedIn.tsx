import Image from 'next/image';

export default function LinkedInIcon() {
    return(
        <div>
            <Image 
                src="/assets/icons/linkedin.svg" 
                alt="LinkedIn Icon" 
                width={20} 
                height={20} 
            />
        </div>
    )
}