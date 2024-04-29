import Header from "@/components/Header/Header";
import clsx from "clsx";

const NotFound = async () => {
  return (
    <div className="not-found-container">
      <Header />
      <div className={clsx("not_found_content sm:p-20 p-10")}>
        <p className="relative text-center text-white xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl xs:text-4xl text-3xl xl:p-8 lg:p-6 md:p-4 sm:p-2 p-1 pb-3 decoration-wavy">
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
