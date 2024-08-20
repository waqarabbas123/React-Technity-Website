import "./Team.css";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa"; //facebook icons
import { FaLinkedinIn } from "react-icons/fa"; //linkedin icons
import { FaTwitter } from "react-icons/fa"; //twitter icons

function Team(props) {
  const [isHovered, setIsHovered] = useState(false);
  const style = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "260px",
    color: "#0e9ebc",
    height: "330px", // Adjust as necessary
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "start",
    borderRadius: "10px", // Optional: For rounded corners
    transition: "0.4s",
  };
  return (
    <>
      <div
        style={style}
        className="team"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="social-info">
            <div className="info">
              <a href={props.fbLink} target="_blank">
                <FaFacebookF />
              </a>
            </div>
            <div className="info">
              <a href={props.linkedinLink} target="_blank">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="info">
              <a href={props.twitterLink} target="_blank">
                <FaTwitter />
              </a>
            </div>
          </div>
        )}
        <div className="team-person-data">
          <h2>{props.teamMemberName}</h2>
          <p>{props.Field}</p>
        </div>
      </div>
    </>
  );
}

export default Team;
