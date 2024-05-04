import initTranslations from "@/app/i18n";
import Header from "@/components/Header/Header";
import SectionOneMain from "@/components/landing/SectionOne/SectionOneMain"
import LayoutSection3 from "@/components/landing/SectionThree/LayoutSection3";
import LayoutSection2 from "@/components/landing/SectionTwo/LayoutSection2"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Chalesh soft'
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <div className="home_container">
      <Header locale={locale} />
      <main>
        <SectionOneMain />
        <LayoutSection2 locale={locale} />
        <LayoutSection3 />
      </main>
    </div>
  );
}
