"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import Link from "next/link";
import Image from "next/image";
import { SectionTwoProps } from "@/lib/types";

interface SliderProps {
  data: SectionTwoProps[];
}

const SliderTwo = ({ data }: SliderProps) => {
  return (
    <Swiper
      slidesPerView={6}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        // speed: 2000,
        // disableOnInteraction: true,
      }}
      modules={[Autoplay]}
      spaceBetween={5}
      className="w-full h-[100px]"
      grabCursor={true}
      speed={1200}
      centeredSlides={true}
      //   pagination={true}
      //   navigation={true}
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          className="!flex !justify-center items-center m-auto"
        >
          <Link
            href={item.href ?? ''}
            className="w-[150px] h-[100px] !flex !justify-center !items-center gap-5"
          >
            <Image src={item.img ?? ''} width={50} height={50} alt={item.name ?? ''} />
            <span className="text-white text-lg">{item.name}</span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderTwo;
