import BlogInfo from "@/components/Blogs/BlogInfo/BlogInfo";
import { Suspense } from "react";
import SingleSlugSkeleton from "./SingleSlugSkeleton";
import { fetchSingleArticle } from "@/lib/actions/blog/fetchSingleBlog";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/providers/TranslationsProvider";
import { getSession } from "@/lib/actions/getSession";
import { Metadata, ResolvingMetadata } from "next";
import { fetchGetUserInfo } from "@/lib/actions/blog/fetchGetUserInfo";

type Props = {
  params: { slug: string; locale: string };
};

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data } = await fetchSingleArticle(slug);
  return {
    title: data.title,
  };
}

const i18Namespaces = ["blog"];

export default async function Page({ params: { slug, locale } }: Props) {
  const { data } = await fetchSingleArticle(slug);
  const { t, resources } = await initTranslations(locale, i18Namespaces);
  const session = await getSession();
  const isLoggedIn = session.isLoggedIn;
  const user = session.isLoggedIn ? session.user : undefined;

  return (
    <>
      <Suspense fallback={<SingleSlugSkeleton />}>
        <TranslationsProvider
          namespaces={i18Namespaces}
          locale={locale}
          resources={resources}
        >
          <BlogInfo
            article={data}
            slug={slug}
            locale={locale}
            isLoggedIn={isLoggedIn}
            //@ts-ignore
            user={user}
          />
        </TranslationsProvider>
      </Suspense>
    </>
  );
}
