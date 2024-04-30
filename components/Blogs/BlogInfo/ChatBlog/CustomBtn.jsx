import React from "react";

const CustomBtn = ({handleOnClick}) => {
  return (
    <button
      className="bg-gradient-to-r from-[#81ecec] to-[#a29bfe] px-3 py-2 rounded-lg font-semibold text-black/75"
      onClick={handleOnClick}
    >
      Submit
    </button>
  );
};

export default CustomBtn;
