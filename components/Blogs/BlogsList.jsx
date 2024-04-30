import CustomBlog from "./CustomBlog";
import moment from "moment";
import { fetchAllArticles } from "@/lib/actions/blog/fetchAllBlogs";
import Skeleton from "./Skeleton";

const BlogsList = async ({locale}) => {
  const { current_page, last_page, data } = await fetchAllArticles(1);
  // console.log("data", data);

  const main_url = process.env.NEXT_PUBLIC_APP_URL_SANCTUM;
  return (
    <div className="w-full flex flex-col gap-3">
      {data?.map((blog) => (
        <CustomBlog
          authorName={blog?.author?.name}
          authorImg={blog?.author?.profile ? (main_url + blog?.author?.profile) : "/images/articles/userImg.png"}
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
      {last_page > current_page && (
        <Skeleton last_page={last_page} current_page={current_page} locale={locale} />
      )}
    </div>
  );
};

export default BlogsList;
