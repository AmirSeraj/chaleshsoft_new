import initTranslations from "@/app/i18n";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["home"]);
  return <div>dwedfwefr</div>;
}
