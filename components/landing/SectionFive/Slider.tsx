"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";
import { FeatureProps } from "@/lib/types";


interface featuresProps {
  features: FeatureProps[];
}

const Slider: React.FC<featuresProps> = ({ features }) => {
  return (
    <>
      <Swiper
        // slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 2,
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
          disableOnInteraction: false,
        }}
        speed={1200}
        modules={[Autoplay, EffectCoverflow]}
        spaceBetween={30}
        className="w-full min-h-[400px] gap-2 flex items-center"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {features.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-[400px] h-[90%] px-7 py-8 rounded-[2rem] bg-[#0E0B22] border-[0.1rem] border-[#312E81] hover:bg-[#262458] transition duration-500 hover:shadow-md shadow-gray-200  group overflow-hidden relative"
          >
            <Card href={item.link} title={item.title} text={item.body} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
