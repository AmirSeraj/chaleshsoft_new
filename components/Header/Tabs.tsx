import Link from "next/link";

const Tabs = async ({ t }: any) => {
  return (
    <div className="gap-7 items-center text-white text-[15px] md:flex hidden">
      <Link href="/">Solution</Link>
      <Link href="/products">{t("products")}</Link>
      <Link href="/blogs">{t("common:blog")}</Link>
      <Link href="/docs">{t("common:docs")}</Link>
      <Link href="/about">{t("common:about_us")}</Link>
    </div>
  );
};

export default Tabs;
