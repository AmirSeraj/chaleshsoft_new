"use client";
import NameProperty from "./NameProperty";
import BlogLikes from "./BlogLikes";
import BlogImage from "./BlogImage";
import CategoriesRelatedToThisBlog from "./CategoriesRelatedToThisBlog";
import { useTranslation } from "react-i18next";
import BlogCard from "../BlogCard";
import Slider from "./Slider";
import ChatBlog from "./ChatBlog/ChatBlogContent";
import { useState } from "react";
import { BlogInfoProps } from "@/lib/types";



const BlogInfo = ({ article, locale, isLoggedIn, user }: BlogInfoProps) => {
  const { t } = useTranslation();
  const [openComments, setOpenComments] = useState(false);

  return (
    <>
      <div className="relative text-white flex flex-col gap-5 2xl:px-72 xl:px-52 lg:px-24 md:px-10 sm:px-5 px-4">
        {/* title */}
        <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-lg lg:font-extrabold sm:font-medium">
          {/* 2023: A Review of the Year in Neuroscience */}
          {article?.title}
        </h1>

        <NameProperty
          img={article?.author?.profile ?? ""}
          min_read={article?.min_read ?? 0}
          created_at={article?.created_at ?? ""}
          name={article?.author?.name ?? ""}
          locale={locale}
        />

        <BlogLikes
          setOpenComments={setOpenComments}
          likeNum={article?.liked_count}
          commentNum={article?.comments_count}
          openComments={openComments}
        />

        <BlogImage img={article?.photo ?? ""} />

        {/* matn */}
        <p className="leading-[2rem] text-sm">{article?.content}</p>

        <BlogLikes
          setOpenComments={setOpenComments}
          likeNum={article?.liked_count}
          commentNum={article?.comments_count}
          openComments={openComments}
        />

        <div className="flex flex-wrap gap-2 w-full">
          {article?.tags.map((item, index) => (
            <CategoriesRelatedToThisBlog
              key={index}
              categoryName={item?.title ?? ""}
            />
          ))}
        </div>

        {/* chats comes here */}
        <ChatBlog
          comments={article?.comments}
          articleId={article?.id}
          article_slug={article?.slug}
          setOpenComments={setOpenComments}
          openComments={openComments}
          isLoggedIn={isLoggedIn}
          user={user}
          locale={locale}
        />

        <h1 className="mb-4">{t("like_these")}</h1>
      </div>

      {/* this task is for tomorrow i should send category id and get all articles related to this category, this is not categories, we only have one category which i have to send categoy id in order to  get articles related to this category  */} */}
      {/* {article?.categories?.length !== 0 && (
        <Slider data={article?.categories} />
      )} */}
    </>
  );
};

export default BlogInfo;
