// "use client";
import Slider from "./Slider";

const LayoutSection7 = ({ locale }: { locale: string }) => {
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  //** data */
  const data = [
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.11 Reliable data and lightning-fast response times! highly recommended. -Sarah L.",
      img: "/images/landing/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.22 Reliable data and lightning-fast response times! highly recommended. -Sarah L.",
      img: "/images/landing/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.33 Reliable data and lightning-fast response times! highly recommended. -Sarah L.",
      img: "/images/landing/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.44 ",
      img: "/images/landing/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.55 ",
      img: "/images/landing/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.66 Reliable data and lightning-fast response times! highly recommended. -Sarah L. Reliable data and lightning-fast response times! highly recommended. -Sarah L.",
      img: "/images/landing/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.77 Reliable data and lightning-fast response times! highly recommended. -Sarah L.",
      img: "/images/landing/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L.88 Reliable data and lightning-fast response times! highly recommended. -Sarah L.",
      img: "/images/landing/Group.png",
    },
    {
      href: "saaa",
      text: "Reliable data and lightning-fast response times! highly recommended. -Sarah L. Reliable data and lightning-fast response times! highly recommended. -Sarah L.",
      img: "/images/landing/Group.png",
    },
  ];

  return (
    <div className="w-full py-8 2xl:px-72 xl:px-50 lg:px-36 md:px-18 sm:px-12 px-4 h-[580px] flex flex-col gap-5 justify-center items-center">
      <p className="text-[#818CF8] font-bold text-center sm:text-5xl text-3xl">
        Client Stories
      </p>
      <p className="text-white text-center lg:text-4xl md:text-3xl sm:text-2xl">
        Empowering Success Through ChaleshSoft{" "}
      </p>
      {/* {isClient && <Slider data={data} />} */}
      <Slider data={data} locale={locale} />
    </div>
  );
};

export default LayoutSection7;
