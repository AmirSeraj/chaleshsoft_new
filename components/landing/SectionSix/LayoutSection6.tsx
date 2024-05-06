import React from "react";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";
import AnimatedText from "@/components/AnimatedText";
import { LandingSection6Props } from "@/lib/types";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/providers/TranslationsProvider";

interface LayoutSection6Props {
  articles: LandingSection6Props[];
  news: LandingSection6Props[];
  locale?: string;
}

const i18nNamespaces = ["landing"];

const LayoutSection6 = async ({
  articles,
  news,
  locale,
}: LayoutSection6Props) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <div
      style={{
        backgroundImage: "url('/images/landing/section6.png')",
        backgroundSize: "",
        zIndex: "100000",
        position: "relative",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[1933px] bg-cover flex flex-col gap-16 text-white items-center justify-center sm:px-10 px-3 "
    >
      <div className="max-w-[1000px] w-auto text-center">
        <p className="text-white sm:text-5xl text-3xl font-bold mb-12">
          {t("stay_updated")}
        </p>
        <AnimatedText
          text="Explore Our Latest Insights and Articles on MEV Solutions and
        Blockchain Innovation"
          className="text-white sm:text-4xl text-xl font-bold leading-[2rem] sm:leading-[3rem]"
        />
      </div>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <SliderOne articles={articles} locale={locale} />
        <p className="text-white sm:text-5xl text-3xl font-bold mb-12">
          {t("latest_news")}
        </p>
        <SliderTwo news={news} locale={locale} />
      </TranslationsProvider>
    </div>
  );
};

export default LayoutSection6;
