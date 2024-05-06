import WriteComment from "./WriteComment";
import ShowComments from "./ShowComments";
import { IoIosClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { ChatBlogProps } from "@/lib/types";

const ChatBlog = ({
  comments,
  setOpenComments,
  openComments,
  articleId,
  isLoggedIn,
  user,
  article_slug,
  locale,
}: ChatBlogProps) => {
  const handleClose = () => {
    setOpenComments(false);
  };

  const { t } = useTranslation();

  return (
    <div
      style={{ zIndex: 1000000 }}
      className={`${
        !openComments && "sm:translate-x-[500px] translate-x-[100%]"
      } transition-all duration-700 fixed pb-10 overflow-auto top-0 right-0 flex m-auto sm:w-[500px] w-full bg-[white] rounded-lg drop-shadow-md flex-col items-center min-h-screen h-screen py-2`}
    >
      <div className="flex justify-between items-center w-full sm:px-8 px-1 mb-3">
        <p className="text-lg text-black font-bold w-full">
          {t("answers")} ({comments?.length})
        </p>
        <IoIosClose
          onClick={handleClose}
          style={{ color: "#000" }}
          size={28}
          className="cursor-pointer"
        />
      </div>

      {isLoggedIn ? (
        <WriteComment
          articleId={articleId}
          user={user}
          article_slug={article_slug}
        />
      ) : (
        <p className="text-red-500 font-bold">{t("leave_comment")}</p>
      )}

      {/* show comments */}

      <div className="border-t border-gray-500 mt-3 w-full text-left text-black/70 text-[0.8rem] p-2">
        {comments?.length > 0 &&
          comments?.map((item, index) => (
            <ShowComments
              key={index}
              //@ts-ignore
              comment={item}
              //@ts-ignore
              locale={locale}
              articleId={articleId}
              article_slug={article_slug}
            />
          ))}
      </div>
    </div>
  );
};

export default ChatBlog;
