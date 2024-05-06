import { LandingSection6Props } from "@/lib/types";
import CustomSlider from "./CustomSlider";

interface SliderOneProps {
  articles: LandingSection6Props[];
  locale?: string;
}

const SliderOne = ({ articles, locale }: SliderOneProps) => {
  return (
    <CustomSlider
      data={articles}
      className="max-w-[402px] !h-[500px]"
      sliderClass="min-h-[550px]"
      add={true}
      locale={locale}
    />
  );
};

export default SliderOne;
