import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Right = ({ locale }: { locale: string }) => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center w-[40%] gap-4">
      <Image
        src="/images/landing/section3.png"
        width={623}
        height={366}
        alt="section3"
      />
      <p className="text-white mt-12">Explore the mempool.</p>
      <Link href="/subject" className="text-[#818CF8] flex items-center gap-3">
        Ethernow
        <div className={locale === "fa" ? "rotate-180" : "rotate-0"}>
          <HiArrowNarrowRight />
        </div>
      </Link>
    </div>
  );
};

export default Right;
