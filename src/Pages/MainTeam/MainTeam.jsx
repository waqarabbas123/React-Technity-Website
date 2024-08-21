import Team from "../../Components/Team/Team";
import "./MainTeam.css";
import AliImg from "/background img.jfif"; //AliImg
import hassanImg from "/TeamImages/hassan img.avif"; //HassanImg

import sajid from "/TeamImages/sajid.jpeg";
// import abbas from "/TeamImages/abbas.jpg";
import junaid from "/TeamImages/junaid.jpeg";
import mehdi from "/TeamImages/mehdi.jpg";
import israr from "/TeamImages/israr.jpg";
import abbas from "/TeamImages/abbas.jpeg";
import mali from "/TeamImages/m-ali.jpeg";
import adan from "/TeamImages/AliAdan.jpeg";
import waqar from "/TeamImages/waqar.jpeg"

function MainTeam() {
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
          <h2 className="text-zinc-200 text-2xl font-semibold pt-14 pl-24 ">
            Our Web Family
          </h2>
          <span className="block font-bold text-3xl text-teal-500 pl-24">
            ___
          </span>
          <div className="team-second-part2">
            <Team
              backgroundImage={sajid}
              teamMemberName="Sajid Hussain"
              Field="CEO"
              // fbLink={}
              // twitterLink={ }
              // linkedinLink={"https://www.linkedin.com/in/hussain-sharaliat-632568b7/"}
            ></Team>
            {/* ----- */}
            <Team
              teamMemberName="Mehdi Akbar"
              Field="WordPress Developer"
              backgroundImage={mehdi}
              fbLink={
                "https://www.facebook.com/share/Sv7cxzGRoYnjEhK7/?mibextid=LQQJ4d"
              }
              twitterLink={"https://x.com/mehdiakbarmir"}
              // linkedinLink={}
            ></Team>
            {/* ----- */}
            <Team
              backgroundImage={israr}
              teamMemberName="Israr Hussain"
              Field="WebFlow Developer"
              // fbLink={ }
              // twitterLink={ }
              // linkedinLink={}
            ></Team>
            {/* ------ */}
            <Team
              backgroundImage={junaid}
              teamMemberName="Junaid Abbas"
              Field="Wordpress Developer"
              // fbLink={}
              // twitterLink={ }
              linkedinLink={
                "https://www.linkedin.com/in/junaid-abbas-shah-b60470280/"
              }
            ></Team>
            {/* ----- */}
            <Team
              backgroundImage={waqar}
              teamMemberName="Waqar Abbas"
              Field="React Developer"
              fbLink={"https://www.facebook.com/husune.waqar "}
              twitterLink={"https://x.com/waqarabbas101"}
              linkedinLink={
                "https://www.linkedin.com/in/waqar-abbas-68a14b314/"
              }
            ></Team>
            {/* ----- */}
            <Team
              backgroundImage={adan}
              teamMemberName="Ali Adan"
              Field="wordPress Developer"
              fbLink={"https://www.facebook.com/profile.php?id=100048033280302"}
              linkedinLink={"https://www.linkedin.com/in/ali-adan-236197308/"}
            ></Team>
            {/* ---- */}
          </div>
          <h2 className="text-zinc-200 text-2xl font-semibold pt-32 pb-10 pl-24 ">
            Our Vedio Family
          </h2>
          <span className="block font-bold text-3xl text-teal-500 pl-24">
            ___
          </span>
          {/* -------------------------------------- */}
          <div className="team-second-part2 ">
            <Team
              teamMemberName="Muhammad Ali"
              Field="Head of vedio Editors"
              backgroundImage={mali}
              // fbLink={ }
              // twitterLink={ }
              // linkedinLink={}
            ></Team>
            {/* ----- */}
            <Team
              teamMemberName="Abbas Akbar"
              Field="NL Editor"
              backgroundImage={abbas}
              fbLink={"https://www.linkedin.com/in/abbas-diju/"}
              // twitterLink={ }
              // linkedinLink={}
            ></Team>
            {/* ----- */}
            <Team
              backgroundImage={AliImg}
              teamMemberName="MUHAMMAD"
              Field="NL Editor"
              // fbLink={ }
              // twitterLink={ }
              // linkedinLink={}
            ></Team>
            {/* ------ */}
            <Team
              backgroundImage={hassanImg}
              teamMemberName="ALIYAN "
              Field="NL Editor"
              // fbLink={ }
              // twitterLink={ }
              // linkedinLink={}
            ></Team>
            {/* ----- */}
            <Team
              backgroundImage={AliImg}
              teamMemberName="HASSNAIN"
              Field="NL Editor"
              // fbLink={ }
              // twitterLink={ }
              // linkedinLink={}
            ></Team>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainTeam;
