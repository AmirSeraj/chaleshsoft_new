import AnimatedText from "@/components/AnimatedText";
import ButtonCustom from "@/components/ButtonCustom";
import React from "react";

const LayoutSection4 = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/landing/section4.png')",
        backgroundSize: "",
        zIndex: "100000",
        position: "relative",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[478px] bg-cover flex flex-col gap-16 text-white items-center justify-center sm:px-10 px-3"
    >
      <AnimatedText
        text="Unraveling Blockchain Potential, One Mempool Insight at a Time"
        className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-xl sm:!leading-[3.5rem] !leading-[2rem] font-bold w-auto max-w-[1300px]"
      />
      <p className="text-center lg:text-3xl md:text-2xl sm:text-xl text-lg sm:!leading-[3.5rem] !leading-[2rem] w-auto">
        Transforming Blockchain Interactions with Trusted Data and Mev Solutions{" "}
      </p>
      <ButtonCustom className=" bg-[#4F46E5] !text-white shadow-md shadow-slate-500">
        Go to Product
      </ButtonCustom>
    </div>
  );
};

export default LayoutSection4;
