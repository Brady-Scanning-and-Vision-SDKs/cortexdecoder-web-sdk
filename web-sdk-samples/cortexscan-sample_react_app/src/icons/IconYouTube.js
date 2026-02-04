
export default function YouTubeIcon() {
    return(
        <div>
            <img 
                src={process.env.PUBLIC_URL + "/assets/icons/youtube.svg"}
                alt="YouTube Icon" 
                width={20} 
                height={20} 
            />
        </div>
    )
}
