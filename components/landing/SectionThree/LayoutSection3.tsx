import React from "react";
import Right from "./Sections/Right";
import Left from "./Sections/Left";
import AnimatedText from "@/components/AnimatedText";

const LayoutSection3 = ({ locale }: { locale: string }) => {
  return (
    <div className="flex flex-col px-[8.5%] lg:px-[7.5%] py-10">
      <AnimatedText
        text="Observe and act on your transactions"
        className="text-center text-white sm:text-4xl text-lg my-10"
      />
      <div className="flex w-full">
        <Left locale={locale} />
        <Right locale={locale} />
      </div>
    </div>
  );
};

export default LayoutSection3;
