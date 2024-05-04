'use client'
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const CustomSlider = ({
  className = "",
  data,
  ImageWidth,
  ImageHeight,
  add = false,
  sliderClass = ""
}) => {
  return (
    <>
      <Swiper
        // slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          speed: 2000,
          // disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        className={`w-full ${sliderClass}`}
        grabCursor={true}
        speed={1200}
        centeredSlides={true}
        pagination={true}
        navigation={true}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${className} rounded-[2rem] bg-[#1C1C41] border-[0.1rem] border-[#312E81] hover:bg-[#262458] transition duration-500 hover:shadow-md shadow-gray-200 group overflow-hidden`}
          >
            <Image
              // src="/images/Main/section6-2.png"
              src={item.img}
              width={ImageWidth}
              height={ImageHeight}
              alt={item.title}
              className="min-h-[247px]"
            />
            <div className="p-6">
              <p className="text-[#D9F99D] mb-5">{item.title}</p>
              <span className="text-white text-[1rem] font-light">
                {item.text}
              </span>
              {add && (
                <div className="w-full text-[#ccc] flex justify-start">
                  Learn More
                  <IoIosArrowRoundForward />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomSlider;
