import { useState } from "react";
// import ProjectItem from "../../../Components/ProjectItem/ProjectItem";
// import youtbeicon from "/youtubeIcon.webp";

const VedioAll = () => {
  return (
    <>
      <h2 className="capitalize text-teal-600 text-2xl text-center py-3 pb-5">
        custom Projects
      </h2>
      <div className="flex items-center flex-wrap justify-center gap-[30px]">
        <iframe
          width="370"
          style={{ borderRadius: "10px", border: "none" }}
          height="320"
          src="https://www.youtube.com/embed/qUw5huWqEgg?si=y2XVBP6UUumji0dC"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="370"
          style={{ borderRadius: "10px", border: "none" }}
          height="320"
          src="https://www.youtube.com/embed/saclT65KPWw?si=Ht-zAz6gLH2ijXsO"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="370"
          height="320"
          style={{ borderRadius: "10px", border: "none" }}
          src="https://www.youtube.com/embed/qUw5huWqEgg?si=W6nJbELcMAPDi_hb"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="370"
          height="320"
          style={{ borderRadius: "10px", border: "none" }}
          src="https://www.youtube.com/embed/X7iZgCOHv1k?si=_gRlUichdqUhI2l-"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="370"
          height="320"
          style={{ borderRadius: "10px", border: "none" }}
          src="https://www.youtube.com/embed/_4W30eFSE7E?si=Lz3q8oHy70YjJIy3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

function Vedioedit() {
  const [currentComponent, setCurrentComponent] = useState(<VedioAll />);
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
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-teal-700 transition-all"
          >
            All
          </a>
          <a
            // onClick={() => handleClick(<Component />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-teal-700 transition-all"
          >
            COMMERCIALS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-teal-700 transition-all"
          >
            COLOR GRADING
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-teal-700 transition-all"
          >
            WEDDINGS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-teal-700 transition-all"
          >
            360 DEGREE VIDEOS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-teal-700 transition-all"
          >
            REAL ESTATE VIDEOS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-slate-100 cursor-pointer hover:text-teal-700 transition-all"
          >
            E LEARNING VIDEOS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio font-serif text-white cursor-pointer hover:text-teal-700 transition-all "
          >
            EXPLAINER VIDEOS
          </a>
          <a
            // onClick={() => handleClick(<Component2 />)}
            className="linkofvedio text-sm font-serif text-white cursor-pointer hover:text-teal-700 transition-all"
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
