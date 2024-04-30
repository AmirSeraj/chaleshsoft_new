import { getSession } from "@/lib/actions/getSession";
import Link from "next/link";
import LogoutForm from "../auth/LogoutForm";

const Tabs = async ({ t }: any) => {
  const session = await getSession();
  return (
    <div className="gap-7 items-center text-white text-[15px] md:flex hidden">
      {session?.isLoggedIn ? (
        <>
          <Link href={"/dashboard"}>{session?.user?.name}</Link>
          <LogoutForm title={t("logout")} />
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
