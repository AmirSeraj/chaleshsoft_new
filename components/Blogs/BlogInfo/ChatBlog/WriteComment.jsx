'use client'
import Image from "next/image";
import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import CustomBtn from "./CustomBtn";

const WriteComment = () => {
  const [comment, setComment] = useState(null);
  const loggedInUser = {
    id: "wedewf",
    name: "amir",
  };
  const handleSaveComment = () => {
    console.log(comment);
  }
  return (
    <div
      className={`w-[90%] border border-gray-300 rounded-md p-3 drop-shadow-lg h-[220px]`}
    >
      <div className="flex gap-2 items-center mb-2">
        {loggedInUser?.image ? (
          <Image
            width={38}
            height={38}
            className="rounded-full"
            alt="user img"
          />
        ) : (
          <IoPersonCircleOutline style={{ color: "#ccc" }} size={32} />
        )}
        <span className="text-black text-[0.7rem]">{loggedInUser.name}</span>
      </div>

      <textarea
        className="p-3 resize-none border-none focus-within:border-slate-400 text-black/75 border-0 text-[0.7rem] focus:border-0 w-full rounded-md h-[110px]"
        placeholder="What are you thoughts?"
        name="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      ></textarea>

      <div className="flex gap-2 text-black text-[0.7rem] justify-end my-2">
        <button onClick={() => setComment("")}>Cancel</button>
        <CustomBtn handleOnClick={handleSaveComment} />
        {/* <button className="px-3 py-2 rounded-2xl bg-green-300">Respond</button> */}
      </div>

    </div>
  );
};

export default WriteComment;
