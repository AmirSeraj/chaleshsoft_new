"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface dataProps {
  data: {
    href: string;
    text: string;
    img: string;
  }[];
  locale: string;
}

const Slider = ({ data, locale }: dataProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      scrollbar={{ draggable: true }}
      modules={[Autoplay, Pagination, Navigation]}
      speed={3000}
      className="h-[327px] w-full"
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={index}
          className="w-[1153px] h-[327px] rounded-[2rem] overflow-hidden"
        >
          <Link
            href={item.href}
            className="flex
            pr-5
            lg:pl-16
            md:pl-10
            sm:pl-4
            p-2
             w-full
              h-[100%]
               md:flex-row flex-col-reverse
              md:items-center md:justify-center items-start 
               xl:gap-3 gap-1
                bg-[#7E22CE] border-[0.1rem] border-[#312E81] hover:bg-[#262458] transition duration-1000 hover:shadow-md shadow-gray-200 group"
          >
            <div
              className="
              md:w-[70%] h-[200px] w-full
             2xl:text-[1.75rem] 2xl:!leading-[3.5rem]
             xl:text-3xl xl:!leading-[3rem]
             lg:text-2xl lg:!leading-[2rem]
             md:text-[1.3rem] md:!leading-[2rem]
             sm:text-lg sm:!leading-[1.5rem]
             text-[1rem]
              flex gap-2 text-white md:items-center items-start"
            >
              <div className="w-full flex flex-wrap justify-center items-center">
                {item.text.split(" ").map((word, wordIndex, array) => (
                  <span
                    key={wordIndex}
                    className={clsx(
                      "md:items-start items-center",
                      (wordIndex === 0 || wordIndex === array.length - 1) &&
                        "flex gap-1"
                    )}
                  >
                    {wordIndex === 0 && (
                      <Image
                        src="/images/landing/sentenceStart.png"
                        width={31}
                        height={31}
                        alt="start"
                        className={clsx(
                          "!w-[31px] !h-[31px] lg:!scale-100 md:!scale-75 !scale-50",
                          locale === "fa" ? "rotate-180" : "rotate-0"
                        )}
                      />
                    )}
                    {word}&nbsp;
                    {wordIndex === array.length - 1 && (
                      <Image
                        src="/images/landing/sentenceEnd.png"
                        width={31}
                        height={31}
                        alt="end"
                        className={clsx(
                          "lg:!scale-100 md:!scale-75 !scale-50",
                          locale === "fa" ? "rotate-180" : "rotate-0"
                        )}
                      />
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-[30%] w-full md:h-full h-[180px] flex md:flex-col flex-row gap-3 text-white justify-center items-center">
              <Image
                src={item.img}
                width={150}
                height={150}
                alt="text"
                className="md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full"
              />
              <span className="sm:text-lg text-sm text-center">
                Lora Sfill, Front-end
              </span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
