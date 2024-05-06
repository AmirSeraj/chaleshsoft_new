"use client";
import { useState } from "react";
import ButtonCustom from "../ButtonCustom";
import { GrLanguage } from "react-icons/gr";
import { IoIosCheckmark } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";

const LangButton = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [faActive, setFaActive] = useState(false);
  const [enActive, setEnActive] = useState(false);
  const router = useRouter();
  const currentPathname = usePathname();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const handleMouseEnter = () => {
    setIsDropDown(true);
  };

  const handleMouseLeave = () => {
    setIsDropDown(false);
    // setTimeout(() => {
    //   setIsDropDown(false);
    // }, 500);
  };

  const classes = `flex justify-center text-white items-center gap-2 duration-200 ${
    isDropDown && "!border-slate-500"
  }`;

  const handleChange = (lang) => {
    const newLocale = lang;
    if (lang === "fa") {
      setFaActive(true);
      setEnActive(false);
    } else {
      setFaActive(false);
      setEnActive(true);
    }

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ButtonCustom className={classes}>
        <GrLanguage />
        {currentLocale}
      </ButtonCustom>
      {isDropDown && (
        <div
          onMouseLeave={handleMouseLeave}
          className="bg-[#E5E7EB] z-[900000] opacity-[0.9] absolute top-[50px] px-[15px] py-[20px] border border-slate-700 rounded-2xl w-[170px] h-[145px] shadow-sm shadow-slate-400 flex flex-col gap-4"
        >
          <div
            className="flex gap-3 items-center cursor-pointer border border-transparent hover:border-slate-400 rounded-md px-[0.4rem] p-1"
            onClick={() => handleChange("en")}
          >
            <div className="border border-slate-500 rounded-md px-[8px] py-1">
              En
            </div>
            <span>English</span>
            {enActive && <IoIosCheckmark size={20} />}
          </div>
          <div
            className="flex gap-3 items-center cursor-pointer border border-transparent hover:border-slate-400 rounded-md px-[0.4rem] p-1"
            onClick={() => handleChange("fa")}
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
