// import React from 'react'
// const vid = "https://www.youtube.com/embed/bX2KrrOwuHk?si=e5VBg_EY1MwQ6Rjg";
import ReactPlayer from "react-player";
// import { useState } from "react";

const Videos = () => {
    // const [youtubeID] = useState('IEDEtZ4UVtI')
    const config = {
        attributes: {
          disablePictureInPicture: true,
          controlsList: 'nodownload',
          "BlockYoutubeEmbedPlayerFeatures": {
            "Value": {
              "BlockRelatedVideos": true,
              "BlockYoutubeButton": true,
              "BlockCopyLink": true,
              "BlockContextMenu": true,
              "BlockWatchLater": true,
              "BlockShare": true
            }
          }
        }
      };
  return (
    <div className="flex justify-center items-center text-center">
      {/* <iframe
        width="560"
        height="315"
        src={vid}
        title="YouTube video player"
        allowfullscreen
        aria-hidden={true}
        tabIndex='-1'
        
        
      ></iframe> */}
     {/* <iframe className='video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
</iframe> */}
<ReactPlayer
      url="https://www.youtube.com/embed/c5cHjtspa7M?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent"
      playing={true}
      volume={1}
      width="100%"
      height="400px"
      config={config}
      controls
      BlockYoutubeEmbedPlayerFeatures
    />
      {/* <video
        className="h-[400px] w-[600px] mt-[100px]"
        src={vid}
        controls
        autoPlay
        playsInline
        preload="true"
      ></video> */}

      {/* <ReactPlayer
        url={vid}
        controls
        light
        pip
        stopOnUnmount={false}
        config={{
          youtube: {
            playerVars: { showinfo: 0 },
            embedOptions:{showinfo:0}
          },
        }}
      /> */}
      

    </div>
  );
};

export default Videos;
