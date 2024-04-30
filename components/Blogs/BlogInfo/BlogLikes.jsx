import { FaHandsClapping } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";

const BlogLikes = ({ likeNum, commentNum, setOpenComments, openComments }) => {
  return (
    <div className="border-y border-slate-500 p-4">
      <div className="flex gap-6">
        {/* likes */}
        <div className="flex items-center gap-2">
          <FaHandsClapping className="cursor-pointer" />
          <span className="text-[#c0c0c0] text-[0.7rem]">{likeNum}</span>
        </div>
        {/* comments */}
        <div className="flex items-center gap-2">
          <FaRegComment onClick={() => setOpenComments(!openComments)} className="cursor-pointer" />
          <span className="text-[#c0c0c0] text-[0.7rem]">{commentNum}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogLikes;
