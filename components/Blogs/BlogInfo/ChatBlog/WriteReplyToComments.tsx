import React, { useState } from "react";
import CustomBtn from "./CustomBtn";
import { useTranslation } from "react-i18next";
import { fetchSingleArticle } from "@/lib/actions/blog/fetchSingleBlog";
import { SendComment } from "@/lib/actions/blog/sendComment";

interface WriteReplyToCommentsProps {
  commentId?: number;
  setShowReplyBox: (showReplyBox: boolean) => void;
  articleId?: number;
  user?: {
    name?: string;
    email?: string;
    profile?: string;
  };
  article_slug?: string;
}

const WriteReplyToComments: React.FC<WriteReplyToCommentsProps> = ({
  setShowReplyBox,
  commentId,
  articleId,
  user,
  article_slug,
}) => {
  const [replyComment, setReplyComment] = useState({
    article: articleId,
    user: user,
    comment: "",
    comment_id: commentId,
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await SendComment(replyComment);
      setLoading(false);
      setReplyComment((prevCommentInfo) => ({
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
  const { t } = useTranslation();
  return (
    <div className="w-[90%] h-[165px] border border-slate-200 rounded-lg p-2">
      <form onSubmit={handleSubmit}>
        <textarea
          className="p-3 resize-none focus-within:border-slate-400 text-black/75 border border-slate-100 text-[0.7rem] focus:border-0 w-full rounded-md h-[110px] outline-none shadow-lg mb-1"
          placeholder={t("your_comment")}
          name="comment"
          value={replyComment?.comment}
          onChange={(e) =>
            setReplyComment({
              ...replyComment,
              comment: e.target.value,
            })
          }
        ></textarea>

        <div className="flex gap-2 text-black text-[0.7rem] justify-end mb-2">
          <button
            disabled={replyComment.comment === ""}
            className={`${replyComment.comment === "" && "cursor-not-allowed"}`}
            onClick={() =>
              setReplyComment((prevCommentInfo) => ({
                ...prevCommentInfo,
                comment: "", // Clear the comment text box
              }))
            }
          >
            {t("cancel")}
          </button>
          <CustomBtn
            loading={loading}
            className={`${replyComment.comment === "" && "cursor-not-allowed"}`}
            disabled={replyComment.comment === ""}
          />
        </div>
      </form>
    </div>
  );
};

export default WriteReplyToComments;
