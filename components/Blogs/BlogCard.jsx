import Image from "next/image";
import Link from "next/link";
import { FaHandsClapping } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import TruncatedSummary from "./TruncatedSummary";

const BlogCard = ({
  articleImg,
  userImg,
  userName,
  title,
  summary,
  min_read,
  created_at,
  likeNum,
  commentNum,
  href,
}) => {
  // const words = summary.split(" ");
  // /** take the five words */
  // const firstFiveWords = words.slice(0, 13);
  // /** join five words into a string */
  // const truncatedSummary = firstFiveWords.join(" ");

  const handdd = () => {
    console.log("sssss");
  };

  return (
    <div className="flex flex-col gap-3 w-[320px] min-w-[320px] bg-[#6c6c6c] overflow-hidden rounded-lg">
      <Link href={href}>
        <Image
          src={articleImg}
          width={324}
          height={162}
          alt="img"
          objectFit="contain"
          className="w-[324px] h-[162px]"
        />
      </Link>
      <div className="p-2 flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <Image
            src={userImg}
            width={20}
            height={20}
            alt="userImg"
            className="rounded-full"
          />
          <p className="text-[0.7rem]">{userName}</p>
        </div>
        <Link href={href}>
          <h1 className="font">{title}</h1>
        </Link>
        <span className="text-[0.75rem]">
          {/* {truncatedSummary} <span className="text-lg">.....</span> */}
          <TruncatedSummary summary={summary} limit={13} />
        </span>
        <div className="flex gap-2 text-[0.7rem]">
          <span>{min_read} min read</span>
          <span>.</span>
          <span>{created_at}</span>
        </div>
        <div className="flex gap-6">
          {/* likes */}
          <div className="flex items-center gap-2">
            <FaHandsClapping className="cursor-pointer" onClick={handdd} />
            <span className="text-[#c0c0c0] text-[0.7rem]">{likeNum}</span>
          </div>
          {/* comments */}
          <div className="flex items-center gap-2">
            <FaRegComment className="cursor-pointer" onClick={handdd} />
            <span className="text-[#c0c0c0] text-[0.7rem]">{commentNum}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
