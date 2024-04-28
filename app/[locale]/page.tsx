import initTranslations from "@/app/i18n";
import Header from "@/components/Header/Header";
import HtmlHead from "@/components/HtmlHead";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <div className="home_container">
      <HtmlHead
        title="Welcome to chalesh dev"
        description="Explore wide variety of designs"
      />
      <Header locale={locale} />
    </div>
  );
}
