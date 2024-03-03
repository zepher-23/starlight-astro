import React,{useRef} from "react";
import '../global.css'


const VideoCard = (props) => {
    const videoRef = useRef(null)
    const {video} = props

const playVideo =()=>{
    videoRef.current.play()

}
const pauseVideo =()=>{
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
}
  return (
<>
<div >
<video className="video" width="400px" height="300px" ref={videoRef} onMouseOver={playVideo} onMouseLeave={pauseVideo}>
        <source src={video.default} />
        </video>
</div>

</>
  );
};

export default VideoCard;
