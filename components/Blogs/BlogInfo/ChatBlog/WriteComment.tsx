"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import CustomBtn from "./CustomBtn";
import { useTranslation } from "react-i18next";
import { SendComment } from "@/lib/actions/blog/sendComment";
import { fetchSingleArticle } from "@/lib/actions/blog/fetchSingleBlog";
import { CommentInfoProps, WriteCommentProps } from "@/lib/types";



const WriteComment: React.FC<WriteCommentProps> = ({
  articleId,
  user,
  article_slug,
}) => {

  const [commentInfo, setCommentInfo] = useState<CommentInfoProps>({
    article: articleId,
    user: user,
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const userName = user?.name || "Guest";
  const { t } = useTranslation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await SendComment(commentInfo);
      setLoading(false);
      setCommentInfo((prevCommentInfo) => ({
        ...prevCommentInfo,
        comment: "", // Clear the comment text box
      }));
      await fetchSingleArticle(article_slug ?? "");
    } catch (error) {
      console.log("error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-[90%] border border-gray-300 rounded-md p-3 drop-shadow-lg h-[220px]`}
    >
      <div className="flex gap-2 items-center mb-2">
        {user?.profile ? (
          <Image
            width={38}
            height={38}
            className="rounded-full"
            alt="user img"
            src={user?.profile}
          />
        ) : (
          <IoPersonCircleOutline style={{ color: "#ccc" }} size={32} />
        )}
        <span className="text-black text-[0.7rem]">{userName}</span>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          className="p-3 resize-none border-none focus-within:border-slate-400 text-black/75 border-0 text-[0.7rem] focus:border-0 w-full rounded-md h-[110px] outline-none"
          placeholder={t("your_comment")}
          name="comment"
          value={commentInfo?.comment}
          onChange={(e) =>
            setCommentInfo({
              ...commentInfo,
              comment: e.target.value,
            })
          }
        ></textarea>

        <div className="flex gap-2 text-black text-[0.7rem] justify-end my-2">
          <button
            disabled={commentInfo.comment === ""}
            className={`${commentInfo.comment === "" && "cursor-not-allowed"}`}
            onClick={() =>
              setCommentInfo((prevCommentInfo) => ({
                ...prevCommentInfo,
                comment: "", // Clear the comment text box
              }))
            }
          >
            {t("cancel")}
          </button>
          <CustomBtn
            loading={loading}
            className={`${commentInfo.comment === "" && "cursor-not-allowed"}`}
            disabled={commentInfo.comment === ""}
          />
        </div>
      </form>
    </div>
  );
};

export default WriteComment;
