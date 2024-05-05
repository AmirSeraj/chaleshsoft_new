import CustomBlog from "./CustomBlog";
import moment from "moment";
import { BlogsProps, SingleBlogProps } from "@/lib/types";

const BlogsList = async ({
  locale,
  blogs,
}: {
  locale: string;
  blogs: BlogsProps;
}) => {
  const main_url = process.env.NEXT_PUBLIC_APP_URL_SANCTUM ?? "";

  return (
    <div className="w-full flex flex-col gap-3">
      {blogs?.data?.map((blog: SingleBlogProps) => (
        <CustomBlog
          authorName={blog?.author?.name ?? ""}
          authorImg={
            blog?.author?.profile
              ? main_url + blog?.author?.profile
              : "/images/articles/userImg.png"
          }
          key={blog?.id ?? 1}
          articleImg={main_url + blog?.photo}
          alt="image"
          articleTitle={blog?.title}
          articleSummary={blog?.summary ?? ""}
          min_read={blog?.min_read ?? 0}
          href={`blogs/${blog?.slug}`}
          article_created_at={moment(blog?.created_at).fromNow()}
          locale={locale}
        />
      ))}
    </div>
  );
};

export default BlogsList;
