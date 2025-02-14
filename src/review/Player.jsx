import React from "react";
import ReactPlayer from "react-player";
import Player from "./Player.json";

const VideoPlayer = () => {
  return (
    <>
      <h1 className="text-5xl font-bold ml-28 mt-10">Live Class Review</h1>
      <div className="flex gap-10 flex-wrap ml-28 pt-12 mr-10">
        {Player.map((data) => (

          <div key={data.id} className="rounded-xl overflow-hidden bg-black shadow-lg">
            <ReactPlayer 
              url={data.video}
              controls 
              width="500px" 
              height="310px"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoPlayer;
