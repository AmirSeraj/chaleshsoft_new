import Image from "next/image";
import React from "react";
import { IoMdPerson } from "react-icons/io";
import moment, { LocaleSpecifier } from "moment";
import "moment/locale/fa";
import { useTranslation } from "react-i18next";

interface NamePropertyProps {
  img?: string;
  name?: string;
  min_read?: number;
  created_at?: string;
  locale: LocaleSpecifier;
}

const main_url = process.env.NEXT_PUBLIC_APP_URL_SANCTUM;

const NameProperty = ({
  img,
  name,
  min_read,
  created_at,
  locale,
}: NamePropertyProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex sm:gap-5 gap-3 items-center">
      {img ? (
        <Image
          src={main_url + img}
          width={44}
          height={44}
          alt="user"
          className="rounded-full"
        />
      ) : (
        <IoMdPerson size={24} />
      )}
      <div className="flex flex-col justify-center">
        <span className="text-[#ccc] text-[0.7rem]">{name}</span>
        <div className="flex gap-2 items-end text-[#ccc] text-[0.7rem]">
          <span>{min_read} {t("min_read")}</span>
          <span className="text-lg">.</span>
          <span>{moment(created_at).locale(locale).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default NameProperty;
