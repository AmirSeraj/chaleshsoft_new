import CustomButton from "@/components/NextUI/CustomButton";

const { default: ButtonCustom } = require("@/components/buttonCustom");

const Buttons = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start w-[135px] lg:w-full gap-4 mt-20">
      <CustomButton color="success" radius="sm" type="button" variant="shadow">
        START NOW
      </CustomButton>
      <CustomButton color="primary" radius="none" type="button" variant="solid">
        Read Docs
      </CustomButton>
    </div>
  );
};

export default Buttons;
