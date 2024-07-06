import { useState } from "react";
import "./Vedio.css";
import { FaPlay } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import ReactPlayer from "react-player";
function Vediopart() {
  const [showFirstDiv, setShowFirstDiv] = useState(true);

  const toggleDivs = () => {
    setShowFirstDiv(!showFirstDiv);
  };

  return (
    <>
      <div className="vediomain">
        <p className="vediotext text-zinc-200 text-center text-[40px] font-semibold px-20 pt-16 pb-12" >
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </p>
        {showFirstDiv ? (
          <div className="vediobox" id="PlayVedio" >
            <div id="Playbtn" onClick={toggleDivs}>
              <FaPlay />
            </div>
          </div>
        ) : (
          <div className="vedio" id="vedioSection" onClick={toggleDivs}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=TJHssCW50JQ"
              width="100%"
              height="100vh"
              controls
            />
            <div className="closebtn">
              <IoCloseCircleOutline />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Vediopart;
