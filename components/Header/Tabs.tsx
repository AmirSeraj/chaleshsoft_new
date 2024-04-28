import initTranslations from "@/app/i18n";
import Link from "next/link";

const namespaces = ["common"];
const Tabs = async ({ t }: any) => {
  return (
    <div className="gap-7 items-center text-white text-[15px] md:flex hidden">
      <Link href="/">Solution</Link>
      <Link href="/products">Products</Link>
      <Link href="/blogs">{t("common:blog")}</Link>
      <Link href="/docs">Docs</Link>
      <Link href="/about">About us</Link>
    </div>
  );
};

export default Tabs;
