import React from "react";
// import './Silder1.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "/new background.jpeg";

function PortfolioSilder() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="slider w-[90%] mx-auto pt-20 mb-16">
        <p className="text-center pb-2 text-lg text-orange-600 font-semibold"> Latest Project</p>
        <h2 className="text-5xl font-semibold text-white text-center">Portfolio to explore</h2>
        <Carousel responsive={responsive} className="mt-20 mb-32">
          <div className="slideImage mr-3 rounded-md">
            <img className="rounded-md " src={image} alt="" />
          </div>
          <div className="slideImage mr-3 rounded-md">
            <img className="rounded-md" src={image} alt="" />
          </div>
          <div className="slideImage mr-3 rounded-md">
            <img className="rounded-md" src={image} alt="" />
          </div>
          <div className="slideImage mr-3 rounded-md">
            <img className="rounded-md" src={image} alt="" />
          </div>
          <div className="slideImage mr-3 rounded-md">
            <img className="rounded-md" src={image} alt="" />
          </div>
          <div className="slideImage mr-3 rounded-md">
            <img className="rounded-md" src={image} alt="" />
          </div>
          <div className="slideImage mr-3 rounded-md">
            <img className="rounded-md" src={image} alt="" />
          </div>
        </Carousel>
        ;
      </div>
    </>
  );
}

export default PortfolioSilder;
