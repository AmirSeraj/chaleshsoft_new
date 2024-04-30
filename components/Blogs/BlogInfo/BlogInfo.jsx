"use client";
import NameProperty from "./NameProperty";
import BlogLikes from "./BlogLikes";
import BlogImage from "./BlogImage";
import CategoriesRelatedToThisBlog from "./CategoriesRelatedToThisBlog";
import BlogCard from "../BlogCard";
import Slider from "./Slider";
import ChatBlog from "./ChatBlog";
import { useEffect, useState } from "react";
import { fetchSingleArticle } from "@/app/blogs/actions";
import { usePathname } from "next/navigation";

const BlogInfo = () => {
  const [openComments, setOpenComments] = useState(false);
  const [article, setArticle] = useState([]);
  const router = usePathname();
  const slug = router.split("blogs/")[1];

  const singleArticle = async (slug) => {
    await fetchSingleArticle(slug);
    try {
      const data = await fetchSingleArticle(slug);
      console.log('data',data);
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    singleArticle(slug);
  }, [slug]);

  console.log('article',article);

  return (
    <>
      <div className="relative text-white flex flex-col gap-5 2xl:px-72 xl:px-52 lg:px-24 md:px-10 sm:px-5 px-4">
        {/* title */}
        <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-lg lg:font-extrabold sm:font-medium">
          {/* 2023: A Review of the Year in Neuroscience */}
          {article?.title}
        </h1>

        <NameProperty
          img={article?.author?.image}
          min_read={article?.min_read}
          created_at={article?.created_at}
          name={article?.author?.name}
        />

        {article?.liked_count !== 0 ||
          (article?.comments_count !== 0 && (
            <BlogLikes
              setOpenComments={setOpenComments}
              likeNum={article?.liked_count}
              commentNum={article?.comments_count}
              openComments={openComments}
            />
          ))}

        <BlogImage img={article?.image_nine} />

        {/* matn */}
        <p className="leading-[2rem] text-sm">{article?.content}</p>

        {article?.liked_count !== 0 ||
          (article?.comments_count !== 0 && (
            <BlogLikes
              setOpenComments={setOpenComments}
              likeNum={article?.liked_count}
              commentNum={article?.comments_count}
              openComments={openComments}
            />
          ))}

        <div className="flex flex-wrap gap-2 w-full">
          {article?.tags?.map((item, index) => (
            <CategoriesRelatedToThisBlog
              key={index}
              categoryName={item?.title}
            />
          ))}
        </div>

        {/* chats comes here */}
        {article?.comments?.length !== 0 && (
          <ChatBlog
            comments={article?.comments}
            setOpenComments={setOpenComments}
            openComments={openComments}
          />
        )}

        <h1 className="mb-4">You also might like these...</h1>
      </div>

      {/* this task is for tomorrow i should send category id and get all articles related to this category, this is not categories, we only have one category which i have to send categoy id in order to  get articles related to this category  */}
      {article?.categories?.length !== 0 && (
        <Slider data={article?.categories} />
      )}
    </>
  );
};

export default BlogInfo;
