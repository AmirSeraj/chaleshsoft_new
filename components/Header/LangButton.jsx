'use client'
import { useState } from "react";
import ButtonCustom from "../buttonCustom";
import { GrLanguage } from "react-icons/gr";
import { IoIosCheckmark } from "react-icons/io";

const LangButton = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [faActive, setFaActive] = useState(false);
  const [enActive, setEnActive] = useState(false);

  const handleMouseEnter = () => {
    setIsDropDown(true);
  };

  const handleMouseLeave = () => {
    setIsDropDown(false);
    // setTimeout(() => {
    //   setIsDropDown(false);
    // }, 500);
  };

  const handleChangeEn = () => {
    setFaActive(false);
    setEnActive(true);
  };

  const handleChangeFa = () => {
    setFaActive(true);
    setEnActive(false);
  };

  const classes = `flex justify-center text-white items-center gap-2 duration-200 mt-[12px] ${
    isDropDown && '!border-slate-500'
  }`;

  return (
    <div
      className="relative hidden md:block h-[70px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ButtonCustom className={classes}>
        <GrLanguage />
        En
      </ButtonCustom>
      {isDropDown && (
        <div
          onMouseLeave={handleMouseLeave}
          className="bg-[#E5E7EB] z-[900000] opacity-[0.9] absolute top-[62px] px-[15px] py-[20px] border border-slate-700 rounded-2xl w-[170px] h-[145px] shadow-sm shadow-slate-400 flex flex-col gap-4"
        >
          <div
            className="flex gap-3 items-center cursor-pointer border border-transparent hover:border-slate-400 rounded-md px-[0.4rem] p-1"
            onClick={handleChangeEn}
          >
            <div className="border border-slate-500 rounded-md px-[8px] py-1">
              En
            </div>
            <span>English</span>
            {enActive && <IoIosCheckmark size={20} />}
          </div>
          <div
            className="flex gap-3 items-center cursor-pointer border border-transparent hover:border-slate-400 rounded-md px-[0.4rem] p-1"
            onClick={handleChangeFa}
          >
            <div className="border border-slate-500 rounded-md px-[8px] py-1">
              Fa
            </div>
            <span>Persian</span>
            {faActive && <IoIosCheckmark size={20} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default LangButton;
