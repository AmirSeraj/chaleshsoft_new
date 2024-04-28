import Link from "next/link";
import ButtonCustom from "../buttonCustom";
import ImgComponent from "./ImgComponent";
import Tabs from "./Tabs";
import { BiChevronRight } from "react-icons/bi";
import LangButton from "./LangButton";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  return (
    // bg-gradient-to-r from-[#06051a] from-60% to-[#4338CA]
    <header className="w-full px-[8.5%] pt-10">
      <div className="h-[150px] w-full flex items-center justify-between">
        <div className="flex gap-5">
          <ImgComponent />
          <Tabs />
        </div>

        <div className="flex gap-2 items-center">
          <LangButton />
          <ButtonCustom className="text-white flex items-center gap-1 border shadow !border-slate-500">
            <Link href="/">Go to Dashboard</Link>
            <BiChevronRight size={20} />
          </ButtonCustom>
          {/* Mobile navigation */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
