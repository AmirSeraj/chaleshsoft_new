'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";

const data = [
  {
    title: "Speed and Responsiveness",
    text: "“Lightning-Fast Response Times: Our platform ensures swift data access in transaction efficiency.”",
    href: "/dd",
  },
  {
    title: "Speed and Responsiveness",
    text: "“Lightning-Fast Response Times: Our platform ensures swift data access in transaction efficiency.”",
    href: "/dd",
  },
  {
    title: "Speed and Responsiveness",
    text: "“Lightning-Fast Response Times: Our platform ensures swift data access in transaction efficiency.”",
    href: "/dd",
  },
  {
    title: "Speed and Responsiveness",
    text: "“Lightning-Fast Response Times: Our platform ensures swift data access in transaction efficiency.”",
    href: "/dd",
  },
  {
    title: "Speed and Responsiveness",
    text: "“Lightning-Fast Response Times: Our platform ensures swift data access in transaction efficiency.”",
    href: "/dd",
  },
  {
    title: "Speed and Responsiveness",
    text: "“Lightning-Fast Response Times: Our platform ensures swift data access in transaction efficiency.”",
    href: "/dd",
  },
  {
    title: "Speed and Responsiveness",
    text: "“Lightning-Fast Response Times: Our platform ensures swift data access in transaction efficiency.”",
    href: "/dd",
  },
  {
    title: "Speed and Responsiveness",
    text: "“Lightning-Fast Response Times: Our platform ensures swift data access in transaction efficiency.”",
    href: "/dd",
  },
  {
    title: "Speed and Responsiveness",
    text: "“Lightning-Fast Response Times: Our platform ensures swift data access in transaction efficiency.”",
    href: "/dd",
  },
  {
    title: "Speed and Responsiveness",
    text: "“Lightning-Fast Response Times: Our platform ensures swift data access in transaction efficiency.”",
    href: "/dd",
  },
  {
    title: "Speed and Responsiveness",
    text: "“Lightning-Fast Response Times: Our platform ensures swift data access in transaction efficiency.”",
    href: "/dd",
  },
];

const Slider = () => {
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
          speed: 2000,
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
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-[400px] h-[90%] px-7 py-8 rounded-[2rem] bg-[#0E0B22] border-[0.1rem] border-[#312E81] hover:bg-[#262458] transition duration-500 hover:shadow-md shadow-gray-200  group overflow-hidden relative"
          >
            <Card href={item.href} title={item.title} text={item.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
