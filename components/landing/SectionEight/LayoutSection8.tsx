import AnimatedText from "@/components/AnimatedText";
import ButtonCustom from "@/components/ButtonCustom";
import React from "react";

const LayoutSection8 = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/landing/section8.png')",
        backgroundSize: "",
        zIndex: "100000",
        position: "relative",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      // h-[1046px]
      className="w-full h-[800px] bg-cover flex flex-col gap-16 text-white items-center justify-center sm:px-10 px-3"
    >
      <div className="max-w-[950px] w-auto">
        <AnimatedText
          className="text-white font-extrabold sm:text-5xl text-2xl text-center leading-[3rem] sm:!leading-[4rem]"
          text="Sign Up Today and Unleash the Power of Mempool Data!"
        />
        <p className="text-white font-semibold sm:text-2xl text-xl text-center leading-[2.5rem] sm:!leading-[3rem] mt-8">
          Explore Our Free Trial and Gain Access to Trustworthy Blockchain
          Insights
        </p>
      </div>
      <ButtonCustom className="uppercase bg-[#4F46E5] !text-white shadow-md shadow-slate-500">
        start now
      </ButtonCustom>
    </div>
  );
};

export default LayoutSection8;
