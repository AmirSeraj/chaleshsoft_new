"use client";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";
import WriteReplyToComments from "./WriteReplyToComments";
import ShowCommentReplies from "./ShowCommentReplies";
import ShowName from "./ShowName";

interface repliesProps {
  id: number;
  body: string;
  status: string;
}

interface commentProps {
  comment: {
    id?: number;
    body?: string;
    status?: string;
    replies?: repliesProps[];
  };
  locale: string;
}

const ShowComments = ({ comment, locale }: commentProps) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const repliesLength = comment.replies ? comment.replies.length : 0;
  const handleWriteReply = () => {
    setShowReplyBox(!showReplyBox);
    console.log(showReplyBox);
  };
  const handleShowReplies = () => {
    setShowReplies(!showReplies);
  };
  return (
    <div className="flex flex-col p-3 border-b border-slate-400 gap-2">
      <ShowName data={comment} locale={locale} />

      <span className="mt-3 text-[0.75rem]">{comment?.body}</span>

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
              "hide replies"
            ) : (
              <>
                {repliesLength === 1 && "1 reply"}
                {repliesLength > 0 && repliesLength + " replies"}
              </>
            )}
          </div>
        )}
        <button onClick={handleWriteReply}>Reply</button>
      </div>
      {/* show reply Box */}
      <div className="w-full flex justify-center py-2">
        {showReplyBox && (
          <WriteReplyToComments setShowReplyBox={setShowReplyBox} />
        )}
      </div>

      {showReplies && <ShowCommentReplies replies={comment.replies} />}
    </div>
  );
};

export default ShowComments;
