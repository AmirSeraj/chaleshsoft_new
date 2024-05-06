import Image from "next/image";

const BottomDiv = () => {
  return (
    <div className="flex justify-between sm:flex-row flex-col md:px-16 px-2 gap-2 mt-5">
      <div className="flex justify-center items-center gap-3">
        <Image src={'/images/header/ImgHeader.png'} alt="header" width={50} height={50} />
        <span className="text-[#FFFFFF]">{new Date().getFullYear()}&copy; All rights Reserved. </span>
      </div>
      <div className="flex justify-center items-center md:gap-10 gap-2">
        <span className="text-white">Privacy Policy</span>
        <span className="text-white">|</span>
        <span className="text-white">Terms of Service</span>
      </div>
    </div>
  );
};

export default BottomDiv;
