import { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; //icons

function ProjectItem(props) {
  const [isHovered, setisHovered] = useState("");
  const style = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "360px",
    height: "260px", // Adjust as necessary
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "start",
    borderRadius: "10px", // Optional: For rounded corners
    transition: "0.4s",
    boxShadow: '4px 2px 10px rgba(255, 69, 0, 0.6)', // box shadow style
  };
  return (
    <div>
      <div
        style={style}
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
      >
        {isHovered && (
          <div className="bg-black w-[100%] h-[100%] opacity-70 flex items-center justify-center rounded-xl flex-col">
            <h3 className="text-gray-100 uppercase text-sm  pb-2">{props.projectBy}</h3>
            <h2 className="text-white text-2xl font-bold uppercase font-[cursive]">{props.websiteName}</h2>
            <a href={props.projectlink} target="_blank" className="transition hover:text-orange-700 flex items-center justify-center text-lg gap-2"> Expend More< FaArrowRight /></a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
