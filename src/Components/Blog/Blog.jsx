// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "/serviceimage4.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa"; //----icon
import sajid from "/TeamImages/sajid.jpeg"
import mali from "/TeamImages/m-ali.jpeg";
import mehdi from "/TeamImages/mehdi.jpg";
import abbas from "/TeamImages/abbas.jpeg";
import waqar from "/TeamImages/waqar.jpeg";
import israr from "/TeamImages/israr.jpg";
import junaid from "/TeamImages/junaid.jpeg";
//------------last images-------
import partner1 from "/partner_1.svg";
import partner2 from "/partner_2.svg";
import partner3 from "/partner_3.svg";
import partner4 from "/partner_4.svg";
import partner5 from "/partner_5.svg";

import "./Blog.css";
function Blog() {
  return (
    <>
      <div className="blog">
        <div className="blog-content">
          <h3>Our Team</h3>
          <h2>
            Welcome to our <br /> Team
          </h2>
          <a href="#">
            View More 
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
        <div className="slider">
          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            x
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={sajid} alt="" />
            </SwiperSlide>

            <SwiperSlide className="slider-item">
              <img src={mali} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={mehdi} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={abbas} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={waqar} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={junaid} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={israr} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={images} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* -------black circle---------- */}

        <div className="small-circle"></div>
        <div className="large-circle"></div>

        {/* ------slider text------------ */}
        <div className="animate-text">
          <div className="marquee">
            <div className="text-container">
              <span className="text-back">
                Our software agency specializes in innovative solutions,
                delivering custom applications , Websites that drive Designing
                growth and enhance user experiences
              </span>
              <span className="text-front">
                Our software agency specializes in innovative solutions,
                delivering custom applications , Websites that drive Designing
                growth and enhance user experiences
              </span>
            </div>
          </div>
        </div>
        {/* -----------images--------- */}
        <div className="images-container pt-14">
          <div className="boxes">
            <img src={partner1} alt="" />
          </div>
          <div className="boxes">
            <img src={partner2} alt="" />
          </div>
          <div className="boxes">
            <img src={partner3} alt="" />
          </div>
          <div className="boxes">
            <img src={partner4} alt="" />
          </div>
          <div className="boxes">
            <img src={partner5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
