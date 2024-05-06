import ButtonCustom from "@/components/ButtonCustom";

const Buttons = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start w-[135px] lg:w-full gap-4 mt-20">
      <ButtonCustom className="text-[#4F46E5] font-bold bg-white !py-2 px-4 shadow-md shadow-slate-500">
        START NOW
      </ButtonCustom>
      <ButtonCustom className="text-white bg-[#4F46E5] font-bold !py-2 px-4 shadow-md shadow-slate-500">
        Read Docs
      </ButtonCustom>
    </div>
  );
};

export default Buttons;
