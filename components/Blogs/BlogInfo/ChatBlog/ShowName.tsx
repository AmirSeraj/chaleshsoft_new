import Image from "next/image";
import { IoPersonCircleOutline } from "react-icons/io5";
import moment, { LocaleSpecifier } from "moment";
import "moment/locale/fa";

interface ShowNameProps {
  data: {
    body: string;
    id: number;
    status: string;
    user_id: number;
    user: { email: string; name: string; profile: string | "" };
    created_at: string;
  };
  locale: LocaleSpecifier | undefined;
}

const ShowName = ({ data, locale }: ShowNameProps) => {
  return (
    <div className="flex gap-2 items-center">
      {data?.user?.profile ? (
        <Image
          width={25}
          height={25}
          alt="user"
          className="rounded-full"
          src={data?.user?.profile}
        />
      ) : (
        <IoPersonCircleOutline size={30} />
      )}
      <div className="flex flex-col justify-between text-[0.7rem]">
        <span>{data?.user?.name}</span>
        <span className="text-[0.6rem]">
          {/* {moment(data.created_at).locale(locale).fromNow()} */}
        </span>
      </div>
    </div>
  );
};

export default ShowName;
