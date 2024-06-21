import Team from "../../Components/Team/Team";
import "./MainTeam.css";
import AliImg from "/background img.jfif";
function MainTeam() {
  const AliImges = {
    backgroundImage: `url(${AliImg})`,
  };
  return (
    <>
      <div className="mainteam">
        {/* ---------home page of team page ------- */}
        <div className="mainteam-home">
          <h2>Our Team</h2>
          <p>
            <span className="team-home">Home</span>

            <span className="team-team">team</span>
          </p>
        </div>
        {/* --------2nd portion ------- */}
        <div className="team-second">
          <div className="team-second-content">
            <p> our Team</p>
            <h2>
              Welcome to our talented
              <br /> developers and designers
            </h2>
          </div>
          <div className="team-second-part2">
            <Team
              backgroundImage={AliImg}
              teamMemberName="Ali Abbas"
              Field="php developer"
            ></Team>
            {/* ----- */}
            <Team
              teamMemberName="Ali Abbas"
              Field="php developer"
              backgroundImage={AliImg}
            ></Team>
            {/* ----- */}
            <Team
              backgroundImage={AliImg}
              teamMemberName="Ali Abbas"
              Field="php developer"
            ></Team>
            {/* ------ */}
            <Team
              backgroundImage={AliImg}
              teamMemberName="Ali Abbas"
              Field="php developer"
            ></Team>
            {/* ----- */}
            <Team
              backgroundImage={AliImg}
              teamMemberName="Ali Abbas"
              Field="php developer"
            ></Team>
            {/* ----- */}
            <Team
              backgroundImage={AliImg}
              teamMemberName="Ali Abbas"
              Field="php developer"
            ></Team>
            {/* ---- */}
            <Team
              backgroundImage={AliImg}
              teamMemberName="Ali Abbas"
              Field="php developer"
            ></Team>
            {/* --- */}
            <Team
              backgroundImage={AliImg}
              teamMemberName="Ali Abbas"
              Field="php developer"
            ></Team>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainTeam;
