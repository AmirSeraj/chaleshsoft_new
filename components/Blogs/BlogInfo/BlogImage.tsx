import Image from "next/image";

interface BlogImageProps {
  img: string;
}

const main_url = process.env.NEXT_PUBLIC_APP_URL_SANCTUM;

const BlogImage = ({ img }: BlogImageProps) => {
  
  return (
    <div className="w-full h-[500px] flex justify-center my-3 relative">
      <Image
        src={main_url + img}
        fill
        alt="article"
        priority
        objectFit="contain"
        // layout="fill"
        style={{ objectFit: "contain" }}
        className="mb-5"
      />
    </div>
  );
};

export default BlogImage;
