import BlogsCategories from "@/components/Blogs/BlogsCategories";
import BlogsList from "@/components/Blogs/BlogsList";
import { Suspense } from "react";
import InitialSkeleton from "./InitialSkeleton";
import initTranslations from "@/app/i18n";

const i18Namespaces = ["blog"];

const Blog = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { t } = await initTranslations(locale, i18Namespaces);
  return (
    <div
      className="xl:px-[8.5%] lg:px-[5.5%] md:px-[3%] sm:px-[2%] px-[5px] flex lg:flex-row flex-col-reverse 2xl:gap-10 xl:gap-7 gap-5 py-5"
      key={Math.random()}
    >
      <div className="lg:w-[70%] w-full p-1">
        <Suspense fallback={<InitialSkeleton />}>
          <BlogsList locale={locale} />
        </Suspense>
      </div>

      <aside className="lg:w-[30%] w-full xl:p-4 lg:p-2 md:p-4 sm:p-2 p-1 text-white">
        <BlogsCategories />
      </aside>
    </div>
  );
};

export default Blog;
