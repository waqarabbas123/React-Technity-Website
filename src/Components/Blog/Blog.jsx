import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "/serviceimage4.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa"; //----icon
//------------last images-------
import partner1 from '/partner_1.svg'
import partner2 from '/partner_2.svg'
import partner3 from '/partner_3.svg'
import partner4 from '/partner_4.svg'
import partner5 from '/partner_5.svg'

import "./Blog.css";
function Blog() {
  return (
    <>
      <div className="blog">
        <div className="blog-content">
          <h3>Our Blog</h3>
          <h2>
            Explore recent <br /> publication
          </h2>
          <a href="#">
            View More Blog
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
              <img src={images} alt="" />
            </SwiperSlide>

            <SwiperSlide className="slider-item">
              <img src={images} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={images} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={images} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={images} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={images} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={images} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={images} alt="" />
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
          <div class="marquee">
            <div className="text-container">
            <span className="text-back">
              This is an infinitely sliding text animation using pure CSS3.
              Enjoy the smooth scrolling effect !
            </span>
            <span className="text-front">
              This is an infinitely sliding text animation using pure CSS3.
              Enjoy the smooth scrolling effect !
            </span>
            </div>
          </div>
        </div>
        {/* -----------images--------- */}
        <div className="images-container pt-24">
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
