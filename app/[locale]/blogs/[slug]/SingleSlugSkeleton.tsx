import React from "react";

const SingleSlugSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 2xl:px-72 xl:px-52 lg:px-24 md:px-10 sm:px-5 px-4 animate-pulse mb-5">
      <div className="w-[70%] h-[35px] rounded-full bg-[#c0c0c0]"></div>

      <div className="flex sm:gap-5 gap-3 items-center">
        <div className="w-[30px] h-[30px] bg-[#c0c0c0] rounded-full"></div>
        <div className="flex flex-col justify-center gap-4">
          <span className="w-[40px] h-[15px] bg-[#c0c0c0] rounded-full"></span>
          <div className="w-[60px] h-[15px] bg-[#c0c0c0] rounded-full"></div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[700px] h-[400px] bg-[#c0c0c0] rounded-2xl"></div>
      </div>

      <div className="w-full h-[120px] bg-[#c0c0c0] rounded-3xl"></div>

      <ul className="flex gap-3">
        {[...Array(4)].map((_, index) => (
          <li
            key={index}
            className="w-[90px] h-[30px] rounded-2xl bg-[#c0c0c0]"
          ></li>
        ))}
      </ul>

      <div className="flex gap-3">
        {[...Array(3)].map((_, index) => (
          <div className="flex flex-col gap-3 w-[320px] min-w-[320px] bg-[#6c6c6c] border border-slate-600 overflow-hidden rounded-lg">
            <div className="w-[324px] h-[162px] bg-[#c0c0c0]"></div>

            <div className="p-2 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="w-[20px] h-[20px] bg-[#c0c0c0] rounded-full"></div>
                <div className="w-[40px] h-[30px] bg-[#c0c0c0] rounded-full"></div>
              </div>
              <div className="w-[80%] h-[30px] rounded-full bg-[#c0c0c0]"></div>

              <div className="w-[80%] h-[70px] rounded-3xl bg-[#c0c0c0]"></div>
              <div className="w-[30%] h-[30px] rounded-3xl bg-[#c0c0c0]"></div>
              <div className="flex gap-6">
                <div className="w-[30px] h-[30px] rounded-full bg-[#c0c0c0]"></div>
                <div className="w-[30px] h-[30px] rounded-full bg-[#c0c0c0]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleSlugSkeleton;
