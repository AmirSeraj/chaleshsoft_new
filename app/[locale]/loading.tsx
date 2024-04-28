import Header from "@/components/Header/Header";
import React from "react";

const Loading = () => {
  const gradientStyle = {
    backgroundImage: `
      radial-gradient(circle at 100% 0%, #6a2c95a6 0%, transparent 25%),
      radial-gradient(circle at 0% 70%, #6a2c95a6 -20%, #06051a 20%)`,
  };
  return (
    <div style={gradientStyle}>
      <Header />
      <div
        className="z-[85555333] w-full flex justify-center items-center h-[75vh] text-red-500"
      >
        <p className="text-center text-8xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">
          Chalesh Soft
        </p>
      </div>
    </div>
  );
};

export default Loading;
