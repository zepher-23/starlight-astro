import React,{useRef} from "react";
import '../global.css'


const VideoCard = (props) => {
    const videoRef = useRef(null)
    const {video} = props

const playVideo =()=>{
    videoRef.current.play()
    // videoRef.current.controls = true

}
const pauseVideo =()=>{
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    // videoRef.current.controls = false
}
  return (
<>

<video className="video" width="30%"   ref={videoRef} onMouseOver={playVideo} onMouseLeave={pauseVideo}>
        <source src={video.default} />
        </video>

</>
  );
};

export default VideoCard;
