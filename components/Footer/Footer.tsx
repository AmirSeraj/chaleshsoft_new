import BottomDiv from "./BottomDiv";
import TopDiv from "./TopDiv";

const Footer = () => {
    return(
        <footer className="mt-auto flex flex-col py-8 lg:px-10 md:px-20 sm:px-5 px-2 bg-[#131313]">
            <TopDiv />
            <BottomDiv />
        </footer>
    )
}

export default Footer;