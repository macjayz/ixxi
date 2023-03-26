import React, { useRef, useEffect } from "react";

import Videos from '../../../config/Videos';
import "../../../asset/css/compstyle.css"


export default function Home() {
 
  const videoRef = useRef(null);

  useEffect(() => {
    let currentVideoIndex = 0;
    const videoSources = [Videos.vid1, Videos.vid5, Videos.vid3, Videos.vid4, Videos.vid2];
    videoRef.current.src = videoSources[currentVideoIndex];
  
    const interval = setInterval(() => {
      currentVideoIndex++;
      if (currentVideoIndex === videoSources.length) {
        currentVideoIndex = 0;
      }
      videoRef.current.src = videoSources[currentVideoIndex];
    }, 10000);
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    
    <div className="video-overlay">
      <video autoPlay muted loop ref={videoRef}>
  <source src={Videos.vid1} type="video/mp4" />
  <source src={Videos.vid2} type="video/mp4" />
  <source src={Videos.vid3} type="video/mp4" />
  <source src={Videos.vid4} type="video/mp4" />
  <source src={Videos.vid5} type="video/mp4" />
</video>

      <div className="overlay-content">
        <h1>iXXi Store</h1>
        <p>What to expect..</p>
      </div>
    </div>
   
  );

}
