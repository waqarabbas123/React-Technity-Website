
import { GrEdit } from "react-icons/gr";
import { IoDiamondOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { IoHelpBuoyOutline } from "react-icons/io5";

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
      <div className="ourmissonsecond py-8 mt-20 flex items-center justify-center gap-24 flex-wrap">
        <div className="firstbox">
          <img className="rounded" src={SecondBanner} alt="" />
        </div>
        <div className="fieldpercent">
          <h3 className="text-lg text-slate-200 pb-4">About us</h3>
          <h2 className="text-3xl font-semibold text-white pb-4">
            UNLIMITED SKILLS FOR <br /> SUPER PROJECTS
          </h2>
          <div className="aaaa w-[60px] - h-1 bg-teal-400 rounded-sm mb-10"></div>
          <div className="aabb">
            <h4 className="text-white text-lg pb-2">Vedio Editing</h4>
            <div className="  w-[90%] h-[5px] rounded bg-gray-200 mb-4">
              <div className=" w-[96%] h-[5px] rounded bg-teal-400"></div>
              <span className="float-end pt-2 text-slate-50 font-mono">
                96%
              </span>
            </div>

            <h4 className="text-white text-lg pb-2">Mangento</h4>
            <div className=" w-[90%] h-[5px] rounded bg-gray-200 mb-4">
              <div className=" w-[90%] h-[5px] rounded bg-teal-400"></div>
              <span className="float-end pt-2 text-slate-50 font-mono">
                90%
              </span>
            </div>

            <h4 className="text-white text-lg pb-2">Wed Flow</h4>
            <div className=" w-[90%] h-[5px] rounded bg-gray-200 mb-4">
              <div className=" w-[92%] h-[5px] rounded bg-teal-400"></div>
              <span className="float-end pt-2 text-slate-50 font-mono">
                92%
              </span>
            </div>

            <h4 className="text-white text-lg pb-2">WordPress</h4>
            <div className=" w-[90%] h-[5px] rounded bg-gray-200 mb-4">
              <div className=" w-[85%] h-[5px] rounded bg-teal-400 "></div>
              <span className="float-end pt-2 text-slate-50 font-mono">
                85%
              </span>
            </div>

            <h4 className="text-white text-lg pb-2">Custom</h4>
            <div className=" w-[90%] h-[5px] rounded bg-gray-200">
              <div className=" w-[95%] h-[5px] rounded bg-teal-400"></div>
              <span className="float-end pt-2 text-slate-50 font-mono">
                95%
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------- */}
      <div className="flex items-center justify-center gap-20 px-20 py-24 flex-wrap">
        <div className="py-7 hover:scale-105 transition">
          <div className="text-5xl text-teal-400 pb-3">
            <GrEdit />
          </div>
          <h2 className="text-white text-lg pb-2  ">Creative Design</h2>
          <p className="text-gray-300 text-[16px]">
            We strive for innovation even in <br /> the most common conventions.
          </p>
        </div>

        <div className="py-7 hover:scale-105 transition">
          <div className="text-4xl text-teal-400 pb-3">
            <IoDiamondOutline />
          </div>
          <h2 className="text-white text-lg pb-2">Perfect Coding</h2>
          <p className="text-gray-300 text-[16px]">
            We strive for innovation even in <br /> the most common conventions.
          </p>
        </div>

        <div className="py-7 hover:scale-105 transition">
          <div className="text-4xl  text-teal-400 pb-3">
            <GoDatabase />
          </div>
          <h2 className="text-white text-lg pb-2">Quick Response</h2>
          <p className="text-gray-300 text-[16px]">
            We strive for innovation even in <br /> the most common conventions.
          </p>
        </div>
        <div className="py-7 hover:scale-105 transition">
          <div className="text-4xl  text-teal-400 pb-3">
            <IoHelpBuoyOutline />
          </div>
          <h2 className="text-white text-lg pb-2">Customer Support</h2>
          <p className="text-gray-300 text-[16px]">
            We strive for innovation even in <br /> the most common conventions.
          </p>
        </div>
      </div>
    </>
  );
}

export default OurMission;
