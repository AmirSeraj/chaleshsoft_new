import CustomBlog from "./CustomBlog";
import moment from "moment";
import { fetchAllArticles } from "@/lib/actions/blog/fetchAllBlogs";
import Skeleton from "./Skeleton";
import { CustomPagination } from "../NextUI/CustomPagination";

interface AuthorProps {
    name: string;
    email: string;
    profile: string;
  }

  interface DataProps {
    id: number;
    title: string;
    slug: string;
    content: string;
    summary: string;
    min_read: number;
    short_link: string;
    status: string;
    author: AuthorProps;
  }

  interface Users {
    current_page: number;
    data: DataProps[];
    last_page: number;
  }

const BlogsList = async ({
  locale,
  users
  // searchParams,
}: {
  locale: string;
  users: Users
  // searchParams?: {
  //   query?: string | undefined;
  //   page?: number | undefined;
  // };
}) => {

  // const users: Users = await fetchAllArticles(
  //   (searchParams?.page as number) || 1
  // );

  console.log("ee", users?.last_page);

  // const current_page = searchParams?.page || users?.current_page;

  const main_url = process.env.NEXT_PUBLIC_APP_URL_SANCTUM;

  return (
    <div className="w-full flex flex-col gap-3">
      {users?.data?.map((blog: any) => (
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

      {/* <div className="flex justify-center mt-5 items-center" dir="ltr">
        {users?.last_page > 1 && (
          <CustomPagination
            totalPage={users?.last_page}
            current_page={current_page}
            color="success"
            variant="flat"
            showShadow={true}
          />
        )}
      </div> */}

      {/* {last_page > current_page && (
        <Skeleton last_page={last_page} current_page={current_page} locale={locale} />
      )} */}
    </div>
  );
};

export default BlogsList;
