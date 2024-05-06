import React from "react";
import ShowName from "./ShowName";
import { LocaleSpecifier } from "moment";

interface repliesProps {
  body?: string;
  created_at?: string;
  id?: number;
  status?: string;
  user_id?: number;
}

interface ShowCommentRepliesProps {
  locale?: LocaleSpecifier | undefined;
  replies?: repliesProps[];
}

const ShowCommentReplies: React.FC<ShowCommentRepliesProps> = ({
  replies,
  locale,
}) => {
  const repliesLength = replies?.length ? replies?.length : 0;
  
  return (
    <div className="border-l-2 border-slate-300 p-2">
      {replies?.map((reply, index) => (
        <div
          key={index}
          className={`p-2 ${
            index === repliesLength - 1 ? "border-none" : "border-b"
          }`}
        >
          <ShowName 
          //@ts-ignore
          data={reply} 
          locale={locale} />
          <p className="px-5 py-2">{reply.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowCommentReplies;
