import Link from "next/link";

const Tabs = async ({ t }: any) => {
  const session = true;
  return (
    <div className="gap-7 items-center text-white text-[15px] md:flex hidden">
      {session ? (
        <>
          <Link href={"/dahboard"}>Amir</Link>
          <div>{t("logout")}</div>
        </>
      ) : (
        <Link href={"/login"}>{t("login")}</Link>
      )}
      <Link href="/products">{t("products")}</Link>
      <Link href="/blogs">{t("blog")}</Link>
      <Link href="/docs">{t("docs")}</Link>
      <Link href="/about">{t("about_us")}</Link>
    </div>
  );
};

export default Tabs;
