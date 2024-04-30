import React, { useState } from "react";
import CustomBtn from "./CustomBtn";

const WriteReplyToComments = ({ setShowReplyBox }) => {
  const [replyComment, setReplyComment] = useState("");
  const handleSaveReply = () => {
    console.log(replyComment);
  }
  return (
    <div className="w-[90%] h-[165px] border border-slate-200 rounded-lg p-2">
      <textarea
        className="border border-slate-300 w-full resize-none p-3 rounded-lg min-h-[100px] text-[0.7rem]"
        placeholder="Write a reply ..."
        name="reply"
        value={replyComment}
        onChange={(event) => setReplyComment(event.target.value)}
      ></textarea>
      <div className="flex justify-end m-1 gap-2">
        <button onClick={(prev) => setShowReplyBox(!prev)}>Cancel</button>
        <CustomBtn handleOnClick={handleSaveReply} />
        {/* <button
          className="bg-gradient-to-r from-[#81ecec] to-[#a29bfe] px-3 py-2 rounded-lg"
          onClick={handleSaveReply}
        >
          Submit
        </button> */}
      </div>
    </div>
  );
};

export default WriteReplyToComments;
