import { CardProps } from "@/lib/types";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";

const Card = ({ href, title, text }: CardProps) => {
  return (
    <Link href={href ?? ''}>
      <p className="text-[#818CF8] mb-7 text-lg group-hover:opacity-10 font-bold">
        {title}
      </p>
      <span className="text-white text-sm overflow-hidden group-hover:opacity-10">
        {text}
      </span>
      <div className="absolute text-white inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 duration-500 overflow-hidden rounded-lg transition-all">
        View Project
        <RxArrowRight className="ml-2 w-[24px] h-[24px]" />
      </div>
    </Link>
  );
};

export default Card;
