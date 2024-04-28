import Header from "@/components/Header/Header";
import clsx from "clsx";

const NotFound = () => {
  const gradientStyle = {
    backgroundImage: `
        radial-gradient(circle at 100% 0%, #6a2c95a6 0%, transparent 8% ),
        radial-gradient(circle at 0% 100%, #6a2c95a6 0%, #06051a 8%)`,
  };
  return (
    <div style={gradientStyle}>
      <Header />
      <div className={clsx('not-found-container sm:p-20 p-10')}>
        <p className="relative text-white xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl xs:text-4xl text-3xl xl:p-8 lg:p-6 md:p-4 sm:p-2 p-1 pb-3 decoration-wavy">
          404{" "}
          <span className="underline decoration-wavy decoration-amber-500">
            Not Found!
          </span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
