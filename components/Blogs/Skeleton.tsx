"use client";

import { useInView } from "react-intersection-observer";
import Loading from "../loading/Loading_2/page";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { fetchAllArticles } from "@/lib/actions/blog/fetchAllBlogs";
import CustomBlog from "./CustomBlog";
import moment from "moment";

const Skeleton = ({
  last_page,
  current_page,
  locale,
}: {
  last_page: number;
  current_page: number;
  locale: string;
}) => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<any>([]);
  const [pagesLoaded, setPagesLoaded] = useState(1);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreArticles = async () => {
    await delay(2000); // So that you dont hit rate limit
    const nextPage = (pagesLoaded % 10) + 1;
    const newArticles = (await fetchAllArticles(nextPage)) ?? [];
    setData((prev: any | undefined) => [
      ...(prev?.length ? prev : []),
      ...newArticles?.data,
    ]);
    setPagesLoaded(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreArticles();
      console.log("scrolled to the end...");
    }
  }, [inView]);

  const main_url = process.env.NEXT_PUBLIC_APP_URL_SANCTUM;

  return (
    <>
      <section>
        {data?.map((blog: any) => (
          <CustomBlog
            authorName={blog?.author?.name}
            authorImg={
              blog?.author?.profile
                ? main_url + blog?.author?.profile
                : "/images/articles/userImg.png"
            }
            key={blog?.id}
            articleImg={main_url + blog?.article_image}
            alt="image"
            articleTitle={blog?.title}
            articleSummary={blog?.summary}
            min_read={blog?.min_read}
            href={`blogs/${blog?.slug}`}
            article_created_at={moment(blog?.created_at).fromNow()}
            locale={locale}
          />
        ))}
      </section>

      <section ref={ref} className="flex justify-center items-center w-full">
        <Loading />
      </section>

      {/* {last_page > current_pageRef.current && ( */}
      {/* {page < last_page && (
        <section ref={ref} className="flex justify-center items-center w-full">
          <Loading />
        </section>
      )} */}
      {/* )} */}
    </>
  );
};

export default Skeleton;
