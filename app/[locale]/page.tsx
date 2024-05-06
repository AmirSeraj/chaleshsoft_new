import initTranslations from "@/app/i18n";
import Header from "@/components/Header/Header";
import SectionOneMain from "@/components/landing/SectionOne/SectionOneMain";
import LayoutSection3 from "@/components/landing/SectionThree/LayoutSection3";
import LayoutSection2 from "@/components/landing/SectionTwo/LayoutSection2";
import LayoutSection4 from "@/components/landing/SectionFour/LayoutSection4";
import LayoutSection5 from "@/components/landing/SectionFive/LayoutSection5";
import LayoutSection6 from "@/components/landing/SectionSix/LayoutSection6";
import LayoutSection7 from "@/components/landing/SectionSeven/LayoutSection7";
import LayoutSection8 from "@/components/landing/SectionEight/LayoutSection8";
import LayoutSection9 from "@/components/landing/SectionNine/LayoutSection9";
import { Metadata } from "next";
import { fetchLanding } from "@/lib/actions/fetchLanding";

export const metadata: Metadata = {
  title: "Chalesh soft",
};

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["home"]);

  const landing = await fetchLanding();

  return (
    <div className="home_container">
      <Header locale={locale} />
      <main>
        <SectionOneMain />
        <LayoutSection2 locale={locale} />
        <LayoutSection3 locale={locale} />
        <LayoutSection4 />
        {/* features */}
        <LayoutSection5 features={landing.features} />
        <LayoutSection6 articles={landing.articles} news={landing.news} locale={locale} />
        <LayoutSection7 locale={locale} />
        <LayoutSection8 />
        <LayoutSection9 />
      </main>
    </div>
  );
}
