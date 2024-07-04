import React from "react";
import SecondBanner from "/3nd-Second-Banner-Final-1.png";
import "./OurMission.css";
function OurMission() {
  return (
    <>
      <div className="OurMissionHome">
        <h2>Our Mission</h2>
        <p>
          <span className="fristchild">Home </span> | <span>Mission</span>
        </p>
      </div>
      {/* ---------------------------- */}
      <div className="ourmissonsecond py-8 mt-20 flex items-center justify-center gap-5 flex-wrap">
        <div className="firstbox">
          <img className="rounded" src={SecondBanner} alt="" />
        </div>
        <div className="fieldpercent">
          <h3 className="text-lg text-slate-200 pb-4">About us</h3>
          <h2 className="text-3xl font-semibold text-white pb-4">
            UNLIMITED SKILLS FOR <br /> SUPER PROJECTS
          </h2>
          <div className="w-[40px] - h-1 bg-emerald-500 rounded mb-10"></div>

          <h4 className="text-white text-lg pb-2">Vedio Editing</h4>
          <div className="  w-[350px] h-[5px] rounded bg-gray-200 mb-4">
            <div className=" w-[96%] h-[5px] rounded bg-orange-600"></div>
            <span className="float-end pt-2 text-slate-50 font-mono">96%</span>
          </div>

          <h4 className="text-white text-lg pb-2">Mangento</h4>
          <div className=" w-[350px] h-[5px] rounded bg-gray-200 mb-4">
            <div className=" w-[90%] h-[5px] rounded bg-orange-600"></div>
            <span className="float-end pt-2 text-slate-50 font-mono">90%</span>
          </div>

          <h4 className="text-white text-lg pb-2">Wed Flow</h4>
          <div className=" w-[350px] h-[5px] rounded bg-gray-200 mb-4">
            <div className=" w-[92%] h-[5px] rounded bg-orange-600"></div>
            <span className="float-end pt-2 text-slate-50 font-mono">92%</span>
          </div>

          <h4 className="text-white text-lg pb-2">WordPress</h4>
          <div className=" w-[350px] h-[5px] rounded bg-gray-200 mb-4">
            <div className=" w-[85%] h-[5px] rounded bg-orange-600 "></div>
            <span className="float-end pt-2 text-slate-50 font-mono">85%</span>
          </div>

          <h4 className="text-white text-lg pb-2">Custom</h4>
          <div className=" w-[350px] h-[5px] rounded bg-gray-200">
            <div className=" w-[95%] h-[5px] rounded bg-orange-600"></div>
            <span className="float-end pt-2 text-slate-50 font-mono">95%</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurMission;
