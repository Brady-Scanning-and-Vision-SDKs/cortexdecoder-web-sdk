import Image from 'next/image';

export default function FacebookIcon() {
    return(
        <div>
            <Image 
                src="/assets/icons/facebook.svg" 
                alt="FaceBook Icon" 
                width={20} 
                height={20} 
            />
        </div>
    )
}