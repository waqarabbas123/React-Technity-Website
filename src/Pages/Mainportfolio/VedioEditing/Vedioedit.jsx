import React, { useState } from "react";
import ProjectItem from "../../../Components/ProjectItem/ProjectItem";

const VedioAll = () => {
  return (
    <>
      <h2 className="capitalize text-orange-600 text-2xl text-center py-3 pb-5">
        custom Projects
      </h2>
      <div className="flex items-center flex-wrap justify-center gap-[30px]">
        <ProjectItem
          websiteName="allunitconverter.com"
          projectBy="Custom"
          projectlink="https://allunitconverter.com/"
          // backgroundImage={allunit}
        ></ProjectItem>
        <ProjectItem
          websiteName="allunitconverter.com"
          projectBy="Custom"
          projectlink="https://allunitconverter.com/"
          // backgroundImage={allunit}
        ></ProjectItem>
        <ProjectItem
          websiteName="allunitconverter.com"
          projectBy="Custom"
          projectlink="https://allunitconverter.com/"
          // backgroundImage={allunit}
        ></ProjectItem>
        <ProjectItem
          websiteName="allunitconverter.com"
          projectBy="Custom"
          projectlink="https://allunitconverter.com/"
          // backgroundImage={allunit}
        ></ProjectItem>
      </div>
    </>
  );
};

function Vedioedit() {
  const [currentComponent, setCurrentComponent] = useState(<VedioAll/>);
  const handleClick = (component) => {
    setCurrentComponent(component);
  };
  return (
    <>
      <div className="MainWebsectionhome">
        <h2>Portfolio</h2>
        <p>
          <span className="fristchild">Vedio </span> | <span>Editing</span>
        </p>
      </div>
      <div className="vedioedit">
        <div className="vediopartlink flex items-center justify-center flex-wrap gap-[50px]  pt-24 pb-20 px-10">
          <a
            onClick={() => handleClick(<VedioAll />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-orange-700 transition-all"
          >
            All
          </a>
          <a
            // onClick={() => handleClick(<Component />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-orange-700 transition-all"
          >
            COMMERCIALS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-orange-700 transition-all"
          >
            COLOR GRADING
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-orange-700 transition-all"
          >
            WEDDINGS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-orange-700 transition-all"
          >
            360 DEGREE VIDEOS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-orange-700 transition-all"
          >
            REAL ESTATE VIDEOS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-orange-700 transition-all"
          >
            E LEARNING VIDEOS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-white cursor-pointer hover:text-orange-700 transition-all "
          >
            EXPLAINER VIDEOS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio text-sm font-serif text-white cursor-pointer hover:text-orange-700 transition-all"
          >
            POD CAST VIDEOS
          </a>
        </div>
        <div className="">{currentComponent}</div>
      </div>
    </>
  );
}

export default Vedioedit;
