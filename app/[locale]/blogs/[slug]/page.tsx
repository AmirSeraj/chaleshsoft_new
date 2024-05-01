import BlogInfo from "@/components/Blogs/BlogInfo/BlogInfo";
import Head from "next/head";
import { Suspense } from "react";
import SingleSlugSkeleton from "./SingleSlugSkeleton";
import { fetchSingleArticle } from "@/lib/actions/blog/fetchSingleBlog";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/providers/TranslationsProvider";

const i18Namespaces = ["blog"];

const Page = async ({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) => {
  const { data } = await fetchSingleArticle(slug);

  const { t, resources } = await initTranslations(locale, i18Namespaces);

  return (
    <>
      <Head>
        <title>َArticle info</title>
        <meta property="og:image" content="content of blog" />
      </Head>
      <Suspense fallback={<SingleSlugSkeleton />}>
        <TranslationsProvider
          namespaces={i18Namespaces}
          locale={locale}
          resources={resources}
        >
          <BlogInfo article={data} locale={locale} />
        </TranslationsProvider>
      </Suspense>
    </>
  );
};

export default Page;
