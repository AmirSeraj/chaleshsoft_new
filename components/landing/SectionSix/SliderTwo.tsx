import { LandingSection6Props } from "@/lib/types";
import CustomSlider from "./CustomSlider";

interface NewsProps {
  news: LandingSection6Props[];
  locale?: string;
}

const SliderTwo = ({ news, locale }: NewsProps) => {
  return (
    <CustomSlider
      data={news}
      className="max-w-[402px] !h-[524px]"
      add={true}
      sliderClass="min-h-[580px]"
      locale={locale}
    />
  );
};

export default SliderTwo;
