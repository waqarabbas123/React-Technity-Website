// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// import images from "/serviceimage4.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa"; //----icon
import sajid from "/TeamImages/sajid.jpeg";
import mali from "/TeamImages/m-ali.jpeg";
import mehdi from "/TeamImages/mehdi.jpg";
import abbas from "/TeamImages/abbas.jpeg";
import waqar from "/TeamImages/waqar.jpeg";
import israr from "/TeamImages/israr.jpg";
import junaid from "/TeamImages/junaid.jpeg";
//------------last images-------
import partner1 from "/client.png";
import partner2 from "/client1.png";
import partner3 from "/client2.png";
import partner4 from "/client3.webp";
import partner5 from "/client4.png";

import "./Blog.css";
function Blog() {
  return (
    <>
      <div className="blog">
        <div className="respsil">
          <div className="blog-content">
            <h3>Our Team</h3>
            <h2>
              Welcome to our <br /> Team
            </h2>
            <Link to="/Mainteam">
              View More
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </div>
          <div className="slider">
            <Swiper
              slidesPerView={2}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={sajid} alt="sajid" />
              </SwiperSlide>

              <SwiperSlide className="slider-item">
                <img src={mali} alt="mali" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={mehdi} alt="mehdi" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={abbas} alt="abbas" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={waqar} alt="waqar" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={junaid} alt="junaid" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={israr} alt="israr" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* -------black circle---------- */}

        <div className="small-circle"></div>
        <div className="large-circle"></div>

        <div className="w-[100%] ">
          <h4 className="text-xl text-teal-400 font-sans font-semibold text-center">
            Our Clients
          </h4>
          <h2 className="text-[43px] text-zinc-200 text-center font-normal font-serif pt-3 pb-5">
            Our Satisfied Clients
          </h2>
        </div>
        {/* -----------images--------- */}
        <div className="images-container">
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
