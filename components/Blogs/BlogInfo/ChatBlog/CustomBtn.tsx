import Loading from "@/components/loading/Loading_1/page";
import React from "react";

interface CustomBtnProps {
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading: boolean;
}

const CustomBtn: React.FC<CustomBtnProps> = ({ handleOnClick, loading }) => {
  return (
    <button
      className="bg-gradient-to-r from-[#81ecec] to-[#a29bfe] px-3 py-2 rounded-lg font-semibold text-black/75"
      onClick={handleOnClick}
      type="submit"
    >
      {loading ? <Loading /> : "Submit"}
    </button>
  );
};

export default CustomBtn;
