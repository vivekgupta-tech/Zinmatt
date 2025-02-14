import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold ml-40  mt-10 ">Media Coverage</h1>
      
      <ReactPlayer 
        url="https://vimeo.com/941505213" 
        controls 
        width="800px" 
        height="540px"
        className=" ml-52 -mt-2 rounded-xl"
      />
    </div>
  );
};

export default VideoPlayer;
