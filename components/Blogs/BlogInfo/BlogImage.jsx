import Image from "next/image";

const BlogImage = ({ img }) => {
  return (
    <div className="w-full h-[500px] flex justify-center my-3 relative">
      <Image
        src={img}
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
