import Link from "next/link";
import ButtonCustom from "../ButtonCustom";
import ImgComponent from "./ImgComponent";
import Tabs from "./Tabs";
import { BiChevronRight } from "react-icons/bi";
import LangButton from "./LangButton";
import MobileNavigation from "./MobileNavigation";
import initTranslations from "@/app/i18n";
import clsx from "clsx";
import { getSession } from "@/lib/actions/getSession";
import { IronSession } from "iron-session";
import { SessionData } from "@/lib/authConfig";

const Header = async ({
  locale,
}: {
  locale?: string;
}) => {
  const { t } = await initTranslations(locale, ["common"]);
  const session: IronSession<SessionData> = await getSession();

  return (
    <header className="w-full px-[8.5%] pt-10">
      <div className="h-[150px] w-full flex items-center justify-between">
        <div className="flex gap-5">
          <ImgComponent />
          <Tabs t={t} />
        </div>

        <div className="flex gap-2 items-center">
          {session?.isLoggedIn && (
            <Link href={"/dashboard"} className="text-white">
              {session?.user?.name}
            </Link>
          )}
          <LangButton />
          <ButtonCustom className="text-white flex items-center gap-1 border shadow !border-slate-500">
            <Link href={session?.isLoggedIn ? "/dashboard" : "/login"}>
              {t("common:dashboard")}
            </Link>
            <div className={clsx(locale === "fa" && "rotate-180")}>
              <BiChevronRight size={20} />
            </div>
          </ButtonCustom>
          {/* Mobile navigation */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
