import  { useState } from "react";
import "./TeamDetail.css";
import { FaPlay } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import ReactPlayer from "react-player";

function TeamDetail() {
  const [showFirstDiv, setShowFirstDiv] = useState(true);

  const toggleDivs = () => {
    setShowFirstDiv(!showFirstDiv);
  };
  return (
    <div>
      <div className="abouthome">
        <h2>Team Details</h2>
        <p>
          <span className="fristchild">Home </span> | <span>Our team</span>
        </p>
      </div>

      <div className="vediomain pt-20">
        {showFirstDiv ? (
          <div className="vediobox" id="PlayVedio">
            <div id="Playbtn" onClick={toggleDivs}>
              <FaPlay />
            </div>
            <h2 className="text-teal-400 pt-3 text-4xl  text-center">
              WE ARE A TEAM OF <br />
              TALENTED DEVELOPERS & DESIGNERS
            </h2>
          </div>
        ) : (
          <div
            className="vedio teamvedio"
            id="vedioSection"
            onClick={toggleDivs}
          >
            <ReactPlayer
              url="https://youtu.be/8-Gg3AO4F1c?si=8f0YtEJL4JQv4sUm"
              width="80%"
              height="80vh"
              controls
            />
            <div className="closebtn" onClick={toggleDivs}>
              <IoCloseCircleOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamDetail;
