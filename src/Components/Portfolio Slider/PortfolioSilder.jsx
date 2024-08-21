import "./Abc.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useRef } from "react";
import { FaLessThan } from "react-icons/fa6";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";

function PortfolioSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
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

  const handleAfterChange = (previousSlide, { currentSlide }) => {
    setActiveIndex(currentSlide);
  };

  const slides = [
    {
      title: "MAGENTO",
      link: "https://www.chin-chin.cl/tienda/",
    },
    {
      title: "WORDPRESS",
      link: "https://donikah.com/",
    },
    {
      title: "WORDPRESS",
      link: "https://kim.technity.com.pk/",
    },
    {
      title: "CUSTOM",
      link: "https://allunitconverter.com/",
    },
    {
      title: "WEBFLOW",
      link: "https://techsgiving-59251c.webflow.io/",
    },
    {
      title: "MAGENTO",
      link: "https://fusionfirearms.com/",
    },
  ];

  return (
    <>
      <div className="slider w-[100%] h-[1500px] mx-auto relative pt-20 mb-52">
        <p className="text-center pb-2 text-lg portfolio font-semibold">
          Latest Project
        </p>
        <h2 className="text-[43px] font-normal text-white text-center">
          Portfolio to explore
        </h2>
        <div className="button-group text-end pr-20 pt-10 mb-[-50px]">
          <button
            onClick={() => carouselRef.current.previous()}
            className="mr-2 bg-teal-600 text-white py-3 px-3 rounded-full"
          >
            <FaLessThan />
          </button>
          <button
            onClick={() => carouselRef.current.next()}
            className=" bg-teal-600 text-white py-3 px-3 rounded-full"
          >
            <TbMathGreater />
          </button>
        </div>
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          className="mt-20 mb-32"
          afterChange={handleAfterChange}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          arrows={false}
          renderButtonGroupOutside={true}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slideImage slideImage${index + 1} mr-3 rounded-md `}
            >
              <div className="contentx">
                <h4 className="text-zinc-300 font-semibold text-lg py-2 font-sans">
                  {slide.title}
                </h4>
                <a
                  className={`pb-2 text-lg ${
                    activeIndex === index
                      ? "text-white" // Active button color
                      : "text-white"
                  }`}
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </Carousel>
        <button className="Btn10">
          <Link to="/Webdevelopment">Read More</Link>
        </button>
      </div>
    </>
  );
}

export default PortfolioSlider;
