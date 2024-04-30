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
  const [page, setPage] = useState(1);
  const current_pageRef = useRef(0);

  const loadMoreArticles = async () => {
    const next = page + 1;
    const articles = await fetchAllArticles(next);
    // current_pageRef.current = articles?.current_page;
    if (articles?.data?.length) {
      setPage(next);
      setData((prev: never[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...articles?.data,
      ]);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMoreArticles();
    }
  }, [inView]);

  console.log("aaa", data);

  const main_url = process.env.NEXT_PUBLIC_APP_URL_SANCTUM;
  console.log("defrfr", main_url);

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
      {/* {last_page > current_pageRef.current && ( */}
      <section ref={ref} className="flex justify-center items-center w-full">
        <Loading />
      </section>
      {/* )} */}
    </>
  );
};

export default Skeleton;
