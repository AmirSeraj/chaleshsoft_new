import Image from "next/image";
import { IoPersonCircleOutline } from "react-icons/io5";
import moment from "moment";
import ShowName from "./ShowName";

const ShowCommentReplies = ({ replies }) => {
  console.log("ddddd", replies?.length - 1);
  return (
    <div className="border-l-2 border-slate-300 p-2">
      {replies.map(
        (reply, index) => (
          console.log(index),
          (
            <div
              key={index}
              className={`p-2 ${
                index === (replies?.length - 1) ? "border-none" : "border-b"
              }`}
            >
              <ShowName data={reply} />
              <p className="px-5 py-2">{reply.content}</p>
            </div>
          )
        )
      )}
    </div>
  );
};

export default ShowCommentReplies;
