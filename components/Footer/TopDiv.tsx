import React from "react";
import TopDivRight from "./TopDivRight";
import TopDivLeft from "./TopDivLeft";

const TopDiv = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between border-b-2 sm:items-end items-center border-[#4E4E4E] xl:px-6 px-2 gap-4 pb-6">
        <TopDivLeft />
        <TopDivRight />
    </div>
  );
};

export default TopDiv;
