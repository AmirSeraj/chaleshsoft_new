import { SubjectProps } from "@/lib/types";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Subjects = ({ title, text, href, locale }: SubjectProps) => {
  return (
    <Link
      href={href ?? ""}
      className="flex flex-col h-[260px] overflow-hidden max-h-[260px] w-[257px]"
    >
      <p
        className={clsx(
          "text-white font-bold",
          locale === "fa" ? "text-right" : "text-left"
        )}
      >
        {title}
      </p>
      <span className="text-white font-light mt-4">{text}</span>
    </Link>
  );
};

export default Subjects;
