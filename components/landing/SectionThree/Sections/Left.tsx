import React from "react";
import Subjects from "./Subjects";

const subjects = [
  {
    href: "/subject",
    title: "Simplified Access:",
    text: "We provide streamlined access to Ethereum mempool data, making blockchain interactions more intuitive and user-friendly.",
  },
  {
    href: "/subject",
    title: "Simplified Access:",
    text: "We provide streamlined access to Ethereum mempool data, making blockchain interactions more intuitive and user-friendly.",
  },
  {
    href: "/subject",
    title: "Simplified Access:",
    text: "We provide streamlined access to Ethereum mempool data, making blockchain interactions more intuitive and user-friendly.",
  },
  {
    href: "/subject",
    title: "Simplified Access:",
    text: "We provide streamlined access to Ethereum mempool data, making blockchain interactions more intuitive and user-friendly.",
  },
  {
    href: "/subject",
    title: "Simplified Access:",
    text: "We provide streamlined access to Ethereum mempool data, making blockchain interactions more intuitive and user-friendly.",
  },
  {
    href: "/subject",
    title: "Simplified Access:",
    text: "We provide streamlined access to Ethereum mempool data, making blockchain interactions more intuitive and user-friendly.",
  },
];

const Left = ({ locale }: { locale: string }) => {
  return (
    <div className="lg:w-[60%] w-full grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-2 justify-center items-center">
      {subjects.map((item) => (
        <Subjects
          locale={locale}
          href={item.href}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default Left;
