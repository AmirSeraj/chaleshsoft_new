import Image from "next/image";
import { IoPersonCircleOutline } from "react-icons/io5";
import moment from "moment";

const ShowName = ({ data }) => {
  return (
    <div className="flex gap-2 items-center">
      {data?.user?.image ? (
        <Image
          width={25}
          height={25}
          alt="user"
          className="rounded-full"
          src={data?.user?.image}
        />
      ) : (
        <IoPersonCircleOutline size={28} />
      )}
      <div className="flex flex-col justify-between text-[0.7rem]">
        <span>{data?.user?.name}</span>
        <span className="text-[0.6rem]">
          {moment(data.created_at).fromNow()}
        </span>
      </div>
    </div>
  );
};

export default ShowName;
