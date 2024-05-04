import Image from "next/image";
import React from "react";

const ContentRight = () => {
  return (
    <div className="lg:w-[50vw] w-full text-white flex justify-center mb-4">
      <Image
        width={680}
        height={550}
        src="/images/landing/blockchain.png"
        alt="blockchain 1"
        className="max-w-[100%] h-[auto] object-contain"
        quality={100}
        objectFit="contain"
      />
    </div>
  );
};

export default ContentRight;
