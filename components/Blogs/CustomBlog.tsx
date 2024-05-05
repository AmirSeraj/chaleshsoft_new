import Image from "next/image";
import Link from "next/link";
import React from "react";
import TruncatedSummary from "./TruncatedSummary";
import initTranslations from "@/app/i18n";
import { CustomBlogProps } from "@/lib/types";

const i18NameSpaces = ["blog"];

const CustomBlog: React.FC<CustomBlogProps> = async ({
  articleImg,
  articleTitle,
  articleSummary,
  article_created_at,
  min_read,
  alt,
  authorImg,
  authorName,
  key,
  href,
  locale,
}) => {
  const { t } = await initTranslations(locale, i18NameSpaces);
  return (
    <Link
      href={href}
      className="overflow-hidden flex sm:flex-row flex-col-reverse xl:gap-10 lg:gap-5 md:gap-3 sm:gap-1 gap-2 justify-between items-center rounded-3xl cursor-pointer bg-[#5f1850] bg-opacity-20 border border-purple-500 border-opacity-50"
      key={key}
    >
      <div className="flex flex-col md:gap-5 sm:gap-3 gap-2 sm:w-[80%] w-[100%] xl:p-6 p-4">
        <div className="flex items-center gap-3">
          <Image
            width={25}
            height={25}
            src={authorImg}
            alt={alt}
            className="rounded-full overflow-hidden"
          />
          <span className="text-white text-sm font-normal">{authorName}</span>
        </div>
        <h1 className="font-semibold sm:text-2xl text-base bg-gradient-to-r from-green-400 to-blue-400 inline-block text-transparent bg-clip-text">
          {articleTitle}
        </h1>
        <p className="text-white md:text-[0.9rem] text-[0.7rem]">
          <TruncatedSummary summary={articleSummary} limit={30} />
        </p>
        <div className="flex sm:gap-3 gap-2 items-center">
          <span className="text-[#c0c0c0] sm:text-xs text-[0.65rem]">
            {article_created_at}
          </span>
          <span className="text-[#7e285a] mb-2">.</span>
          <span className="text-[#c0c0c0] sm:text-xs text-[0.65rem]">
            {min_read} {t("min_read")}
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center sm:w-[20%] w-[100%] xl:p-6 lg:p-4 sm:p-2 p-0">
        <Image
          src={articleImg}
          width={200}
          height={150}
          alt={alt}
          layout="fixed"
          style={{ objectFit: "cover" }}
          objectPosition="50% 50%"
          className="sm:rounded-xl rounded-t-xl sm:w-[200px] h-[150px] w-[100%]"
        />
      </div>
    </Link>
  );
};

export default CustomBlog;
