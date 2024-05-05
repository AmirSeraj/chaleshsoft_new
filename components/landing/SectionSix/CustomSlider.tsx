"use client";
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
import Link from "next/link";
import { LandingSection6Props } from "@/lib/types";

interface CustomSliderProps {
  data: LandingSection6Props[];
  ImageWidth?: number;
  ImageHeight?: number;
  className?: string;
  sliderClass?: string;
  add?: boolean | false;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  className = "",
  data,
  add = false,
  sliderClass = "",
}) => {
  const path = process.env.NEXT_PUBLIC_APP_URL_SANCTUM || "";
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
            <Link href={item?.short_link ?? ''} className="w-full h-[250px] relative inline-block">
              {item?.photo === null ? (
                <Image
                  src={"/images/image-not-found.png"}
                  fill
                  alt={item.title ?? ''}
                  objectFit="cover"
                />
              ) : (
                <Image
                  src={path + item?.photo}
                  fill
                  alt={item.title ?? ''}
                  objectFit="cover"
                />
              )}
            </Link>
            <div className="p-6 h-1/2">
              <p className="text-white mb-2 font-bold text-xl">{item.title}</p>
              <span className="text-white text-[1rem] font-light overflow-y-auto h-[170px] w-full inline-block">
                {item.content}
              </span>
              {add && (
                <Link href={item?.short_link ?? ''} className="w-full text-[#ccc] flex justify-start items-center gap-3">
                  Learn More
                  <IoIosArrowRoundForward />
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomSlider;
