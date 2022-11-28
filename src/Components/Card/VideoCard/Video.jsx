import React from "react";
//import ReactPlayer from "react-player";
import PlayIcon from "../../../images/Card/play.svg";
import "../../../index.css";
import image from "../../../images/Card/video thumbnail.png"

const VideoCard = () => {
  const url = "https://www.youtube.com/watch?v=Oy6hk6Y7VHQ";
  return (
    <div className="p-2 lg:p-3 w-full md:w-1/3 md:h-1/2">
      <div className="bg-white px-4 pt-1 pb-10 rounded-lg">
        <div className="mt-3 flex justify-between">
          <h3 className="text-lg text-mainColor mb-6">Product Video</h3>
        </div>
        <div className="wrapper">
          {/* <div style={{ width: "50px", height: "50px" }} >
            <ReactPlayer
              id="video-cover"
              className="w-full"
              style={{ width: "50px", height: "50px", borderRadius: "5px" }}
              url={url}
              light={PlayIcon}
              playing
              controls
            />
          </div> */}

          <img
            id="video-cover"
            src={image}
            alt="Video title"
            className="w-full cursor-pointer rounded-lg"
          />

          <button id="play" className="play-btn z-50">
            <div className="p-3 bg-white rounded-full shadow-2xl z-50">
              <img src={PlayIcon} width="20" alt="Play" onClick={() => {
                window.location.assign(url);
              }} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
