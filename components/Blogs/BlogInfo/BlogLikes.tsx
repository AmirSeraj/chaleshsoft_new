import { FaHandsClapping } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { ArticleProps } from "@/lib/types";
import { fetchLike } from "@/lib/actions/blog/fetchLike";

interface BlogLikesProps {
  likeNum?: number;
  commentNum?: number;
  setOpenComments: (openComments: boolean) => void;
  openComments?: boolean;
  article: ArticleProps;
}

const BlogLikes = async ({
  likeNum,
  commentNum,
  setOpenComments,
  openComments,
  article,
}: BlogLikesProps) => {
  const handleClapping = async () => {
    const data = {
      type: "article",
      id: article.id,
    };
    try {
      const res = await fetchLike(data);
      const response = res.json();
      console.log('re',response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-y border-slate-500 p-4">
      <div className="flex gap-6">
        {/* likes */}
        <div className="flex items-center gap-2">
          <FaHandsClapping
            className="cursor-pointer"
            onClick={handleClapping}
          />
          <span className="text-[#c0c0c0] text-[0.7rem]">{likeNum}</span>
        </div>
        {/* comments */}
        <div className="flex items-center gap-2">
          <FaRegComment
            onClick={() => setOpenComments(!openComments)}
            className="cursor-pointer"
          />
          <span className="text-[#c0c0c0] text-[0.7rem]">{commentNum}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogLikes;
