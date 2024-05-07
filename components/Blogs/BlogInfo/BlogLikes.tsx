import { FaHandsClapping } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { BlogLikesProps, FetchGetUserInfoProps } from "@/lib/types";
import { fetchLike } from "@/lib/actions/blog/fetchLike";
import clsx from "clsx";
import { fetchGetUserInfo } from "@/lib/actions/blog/fetchGetUserInfo";
import { getSession } from "@/lib/actions/getSession";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const BlogLikes = ({
  likeNum,
  commentNum,
  setOpenComments,
  openComments,
  article,
}: BlogLikesProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [likeCount, setLikeCount] = useState(likeNum);
  const [userLikeStatus, setUserLikeStatus] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClapping = async () => {
      const session = await getSession();
      if (!session.isLoggedIn) {
        router.push(`/login?redirect=` + pathname);
        return;
      }
      try {
        const res = await fetchLike({ type: "article", id: article.id });
        if (res.status === "success") {
          if (!userLikeStatus) {
            setLikeCount((prevLikeNum) => (prevLikeNum ?? 0) + 1);
            setUserLikeStatus(true);
          } else {
            setLikeCount((prevLikeNum) => (prevLikeNum ?? 0) - 1);
            setUserLikeStatus(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (clickCount > 0) {
      handleClapping();
    }
  }, [article.id, clickCount]);

  const handleClick = () => {
    setClickCount((prevClickCount) => prevClickCount + 1);
  };

  useEffect(() => {
    const handleGetUserInfo = async () => {
      const session = await getSession();
      const data: FetchGetUserInfoProps = {
        articleId: article.id,
        token: session.token,
      };
      if (session.isLoggedIn) {
        const userInfo = await fetchGetUserInfo(data);
        if (userInfo.like === 1) {
          setUserLikeStatus(true);
          // setLikeCount((prevLikeNum) => (prevLikeNum ?? 0) + 1);
        } else {
          setUserLikeStatus(false);
        }
      }
    };
    handleGetUserInfo();
  }, [article.id, clickCount]);

  return (
    <div className="border-y border-slate-500 p-4">
      <div className="flex gap-6">
        {/* likes */}
        <div className="flex items-center gap-2">
          <FaHandsClapping
            className="cursor-pointer"
            onClick={handleClick}
            color={clsx(userLikeStatus ? "#515157" : "#fff")}
          />
          <span
            className={clsx(
              "text-[0.7rem]",
              userLikeStatus ? "text-[#515157]" : "text-[#fff]"
            )}
          >
            {likeCount}
          </span>
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
