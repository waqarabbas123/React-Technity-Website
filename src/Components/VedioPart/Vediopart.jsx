import React from "react";
import "./Vedio.css";
import ReactPlayer from "react-player";
function Vediopart() {
  return (
    <div className="vedio">
        <ReactPlayer  
          url="https://www.youtube.com/watch?v=TJHssCW50JQ"
          width="100%"
          height="100vh"
          controls
        />
    </div>
  );
}

export default Vediopart;
