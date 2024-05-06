import ButtonCustom from "@/components/ButtonCustom";
import React from "react";

const LayoutSection9 = () => {
  return (
    <div className="w-full h-[400px] flex flex-col justify-center items-center gap-9 px-9">
      <p className="text-[#C084FC] font-bold sm:text-4xl text-2xl text-center leading-[2rem]">
        Stay Ahead Blockchain Innovation!
      </p>
      <p className="text-[#C084FC] text-center">
        Enter your email to receive the latest MEV insights and updates.
      </p>
      <div className="flex sm:flex-row flex-col gap-5">
        <input
          className="rounded-2xl px-5 sm:py-0 py-[0.75rem] bg-[#ccc] text-[#09090B]"
          placeholder="Enter your email address"
        />
        <ButtonCustom className="text-[white] bg-blue-700 !rounded-2xl">
          Subscribe
        </ButtonCustom>
      </div>
    </div>
  );
};

export default LayoutSection9;
