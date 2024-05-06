"use client";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";
import WriteReplyToComments from "./WriteReplyToComments";
import ShowCommentReplies from "./ShowCommentReplies";
import ShowName from "./ShowName";
import { useTranslation } from "react-i18next";

interface repliesProps {
  id: number;
  body: string;
  status: string;
}

interface UserProps {
  name?: string;
  email?: string;
  profile?: string;
}

interface commentProps {
  comment: {
    id?: number;
    body?: string;
    status?: string;
    replies?: repliesProps[];
    created_at?: string;
    user?: UserProps;
  };
  locale: string;
  articleId?: number;
  article_slug?: string;
}

const ShowComments = ({
  comment,
  locale,
  articleId,
  article_slug,
}: commentProps) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const repliesLength = comment.replies ? comment.replies.length : 0;
  const handleWriteReply = () => {
    setShowReplyBox(!showReplyBox);
  };
  const handleShowReplies = () => {
    setShowReplies(!showReplies);
  };

  const { t } = useTranslation();

  return (
    <div className="flex flex-col p-3 border-b border-slate-400 gap-2">
      <ShowName 
      //@ts-ignore
      data={comment} locale={locale} />

      <span
        className="mt-3 text-[0.75rem]"
        dir={locale === "fa" ? "rtl" : "ltr"}
      >
        {comment?.body}
      </span>

      {/* reply to comment */}
      <div
        className={`mt-4 flex ${
          repliesLength > 0 ? "justify-between" : "justify-end"
        }`}
      >
        {repliesLength > 0 && (
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={handleShowReplies}
          >
            <FaRegComment size={20} />
            {showReplies ? (
              t("hide replies")
            ) : (
              <>
                {locale === "fa" ? (
                  repliesLength + " پاسخ "
                ) : (
                  <>
                    {repliesLength === 1 && "1 reply"}
                    {repliesLength > 0 && repliesLength + " replies"}
                  </>
                )}
              </>
            )}
          </div>
        )}
        <button className="text-[0.68rem]" onClick={handleWriteReply}>{t("Reply_to_this_comment")}</button>
      </div>
      {/* show reply Box */}
      <div className="w-full flex justify-center py-2">
        {showReplyBox && (
          <WriteReplyToComments
            setShowReplyBox={setShowReplyBox}
            commentId={comment.id}
            user={comment.user}
            articleId={articleId}
            article_slug={article_slug}
          />
        )}
      </div>

      {showReplies && (
        <ShowCommentReplies replies={comment.replies} locale={locale} />
      )}
    </div>
  );
};

export default ShowComments;
