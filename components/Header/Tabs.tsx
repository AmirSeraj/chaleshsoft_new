import Link from "next/link";
import LogoutForm from "../auth/LogoutForm";
import { getSession } from "@/lib/actions/getSession";
import { IronSession } from "iron-session";
import { SessionData } from "@/lib/authConfig";

const Tabs = async ({ t }: any) => {
  const session: IronSession<SessionData> = await getSession();
  return (
    <div className="gap-7 items-center text-white text-[15px] md:flex hidden">
      {session.isLoggedIn && <LogoutForm title={t("logout")} />}
      <Link href="/products">{t("products")}</Link>
      <Link href="/blogs">{t("blog")}</Link>
      <Link href="/docs">{t("docs")}</Link>
      <Link href="/about">{t("about_us")}</Link>
    </div>
  );
};

export default Tabs;
