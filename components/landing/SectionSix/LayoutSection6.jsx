import React from "react";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";
import AnimatedText from "@/components/AnimatedText";

const LayoutSection6 = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/Main/section6.png')",
        backgroundSize: "",
        zIndex: "100000",
        position: "relative",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[1933px] bg-cover flex flex-col gap-16 text-white items-center justify-center sm:px-10 px-3 "
    >
      <div className="max-w-[1000px] w-auto text-center">
        <p className="text-white sm:text-5xl text-3xl font-bold mb-12">
          Stay Updated!
        </p>
        <AnimatedText
          text="Explore Our Latest Insights and Articles on MEV Solutions and
        Blockchain Innovation"
          className="text-white sm:text-4xl text-xl font-bold leading-[2rem] sm:leading-[3rem]"
        />
      </div>
      <SliderOne />
      <p className="text-white sm:text-5xl text-3xl font-bold mb-12">
        Latest News
      </p>
      <SliderTwo />
    </div>
  );
};

export default LayoutSection6;
