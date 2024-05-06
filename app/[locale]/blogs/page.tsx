import BlogsCategories from "@/components/Blogs/BlogsCategories";
import BlogsList from "@/components/Blogs/BlogsList";
import { Suspense } from "react";
import InitialSkeleton from "./InitialSkeleton";
import initTranslations from "@/app/i18n";
import { CustomPagination } from "@/components/NextUI/CustomPagination";
import { fetchAllArticles } from "@/lib/actions/blog/fetchAllBlogs";
import Skeleton from "@/components/Blogs/Skeleton";

const i18Namespaces = ["blog"];

const Blog = async ({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams?: {
    query?: string;
    page?: number;
  };
}) => {
  const { t } = await initTranslations(locale, i18Namespaces);

  const blogs = await fetchAllArticles((searchParams?.page as number) || 1);

  const current_page = searchParams?.page || blogs?.current_page;

  return (
    <div className="xl:px-[8.5%] lg:px-[5.5%] md:px-[3%] sm:px-[2%] px-[5px] flex lg:flex-row flex-col-reverse 2xl:gap-10 xl:gap-7 gap-5 py-5">
      <div className="lg:w-[70%] w-full p-1">
        <Suspense fallback={<InitialSkeleton />}>
          <BlogsList locale={locale} blogs={blogs} />
        </Suspense>

        <div className="flex justify-center mt-5 items-center" dir="ltr">
          {blogs?.last_page > 1 && (
            <CustomPagination
              totalPage={blogs?.last_page}
              current_page={current_page}
              color="primary"
              variant="flat"
              showShadow={true}
            />
          )}
        </div>

        {/* {users?.last_page > current_page && (
          <Skeleton
            last_page={users?.last_page}
            current_page={current_page}
            locale={locale}
          />
        )} */}
      </div>

      <aside className="lg:w-[30%] w-full xl:p-4 lg:p-2 md:p-4 sm:p-2 p-1 text-white">
        <BlogsCategories />
      </aside>
    </div>
  );
};

export default Blog;
