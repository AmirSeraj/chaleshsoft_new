'use client'
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";
import WriteReplyToComments from "./WriteReplyToComments";
import ShowCommentReplies from "./ShowCommentReplies";
import ShowName from "./ShowName";

const ShowComments = ({ comment }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const handleWriteReply = () => {
    setShowReplyBox(!showReplyBox);
    console.log(showReplyBox);
  };
  const handleShowReplies = () => {
    setShowReplies(!showReplies);
  };
  return (
    <div className="flex flex-col p-3 border-b border-slate-400 gap-2">
      <ShowName data={comment} />

      <span className="mt-3 text-[0.75rem]">{comment?.content}</span>

      {/* reply to comment */}
      <div
        className={`mt-4 flex ${
          comment?.replies?.length > 0 ? "justify-between" : "justify-end"
        }`}
      >
        {comment?.replies?.length > 0 && (
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={handleShowReplies}
          >
            <FaRegComment size={20} />
            {showReplies ? (
              "hide replies"
            ) : (
              <>
                {comment?.replies?.length === 1 && "1 reply"}
                {comment?.replies?.length > 0 &&
                  comment?.replies?.length + " replies"}
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
