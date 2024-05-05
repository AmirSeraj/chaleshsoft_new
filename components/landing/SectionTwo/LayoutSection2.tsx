import AnimatedText from "@/components/AnimatedText";
import SliderTwo from "./SliderTwo";

const LayoutSection2 = ({ locale }: { locale: string }) => {
  const data = [
    {
      img: "/images/landing/ether.png",
      name: "Ethereum",
      href: "https://ethereum.org",
    },
    {
      img: "/images/landing/polygan.png",
      name: "Polygan",
      href: "https://polygan.org",
    },
    {
      img: "/images/landing/python.png",
      name: "Python",
      href: "https://amir",
    },
    {
      img: "/images/landing/solana.png",
      name: "Solana",
      href: "https://amir",
    },
    {
      img: "/images/landing/solidity.png",
      name: "Solidity",
      href: "https://amir",
    },
    {
      img: "/images/landing/ether.png",
      name: "Ethereum",
      href: "https://ethereum.org",
    },
    {
      img: "/images/landing/polygan.png",
      name: "Polygan",
      href: "https://polygan.org",
    },
    {
      img: "/images/landing/python.png",
      name: "Python",
      href: "https://amir",
    },
    {
      img: "/images/landing/solana.png",
      name: "Solana",
      href: "https://amir",
    },
    {
      img: "/images/landing/solidity.png",
      name: "Solidity",
      href: "https://amir",
    },
  ];
  return (
    <div className="w-full h-[250px] py-[30px] px-[8.5%] flex flex-col justify-center items-center gap-8 text-lg bg-[#5A4A4A] bg-opacity-20">
      <AnimatedText
        text="Leveraging Cutting-Edge Technologies"
        className="text-white text-center"
      />
      {/* <InfiniteHorizontalScroll locale={locale}>
        {data.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center justify-center gap-2 text-white"
            >
              <Image alt={item.name} width={50} height={50} src={item.img} />
              {item.name}
            </Link>
          </li>
        ))}
      </InfiniteHorizontalScroll> */}
      <SliderTwo data={data} />
    </div>
  );
};

export default LayoutSection2;
