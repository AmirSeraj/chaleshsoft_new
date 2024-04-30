import React from "react";

const InitialSkeleton = () => {
  return (
    <section>
      <ul className="w-full flex flex-col gap-3">
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            className="flex sm:flex-row flex-col-reverse xl:gap-10 lg:gap-5 md:gap-3 sm:gap-1 gap-2 justify-between items-center xl:p-6 p-4 rounded-3xl border border-slate-500 border-opacity-50 bg-[#eee] animate-pulse min-h-[235px]"
          >
            <div className="flex flex-col md:gap-5 sm:gap-3 gap-2 sm:w-[80%] w-[100%]">
              <div className="flex items-center gap-3">
                <div className="w-[25px] h-[25px] rounded-full bg-[#c0c0c0]"></div>
                <span className="w-[40%] h-4 rounded-lg bg-[#c0c0c0]"></span>
              </div>
              <div className="w-[80%] h-4 rounded-lg bg-[#c0c0c0]"></div>
              <div className="w-[80%] h-4 rounded-lg bg-[#c0c0c0]"></div>
              <div className="w-[30%] h-4 rounded-lg bg-[#c0c0c0]"></div>
            </div>
            <div className="sm:w-[20%] w-[100%] h-[180px] rounded-lg bg-[#c0c0c0]"></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InitialSkeleton;
