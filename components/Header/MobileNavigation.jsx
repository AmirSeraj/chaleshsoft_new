'use client'
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import ImgComponent from "./ImgComponent";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const MobileNavigation = () => {
  const [showNav, setShowNav] = useState(false);
  const isLoggedIn = false;
  return (
    <>
      <TiThMenu
        onClick={() => setShowNav((prew) => !prew)}
        size={25}
        className="cursor-pointer block md:hidden"
      />

      {/* display mobile navigation */}
      {showNav && (
        <div className="fixed z-[922200000] top-0 right-0 w-[100vw] min-h-screen h-[100vh] bg-slate-50 flex flex-col">
          <div className="flex p-5 justify-between items-center border-b border-b-gray-300">
            <ImgComponent />
            <IoIosClose
              size={25}
              className="cursor-pointer"
              onClick={() => setShowNav(false)}
            />
          </div>
          <div>
            <ul>
              <li className="px-5 py-2">
                <Link
                  className="flex p-3 justify-between items-center cursor-pointer"
                  href="#"
                >
                  Services
                  <IoIosArrowForward />
                </Link>
              </li>
              <li className="px-5 py-2">
                <Link
                  className="flex p-3 justify-between items-center cursor-pointer"
                  href="#"
                >
                  Services
                  <IoIosArrowForward />
                </Link>
              </li>
              <li className="px-5 py-2">
                <Link
                  className="flex p-3 justify-between items-center cursor-pointer"
                  href="#"
                >
                  Services
                  <IoIosArrowForward />
                </Link>
              </li>
              <li className="px-5 py-2">
                <Link
                  className="flex p-3 justify-between items-center cursor-pointer"
                  href="#"
                >
                  Services
                  <IoIosArrowForward />
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto p-5 border-t border-t-gray-300">
            {isLoggedIn ? (
              <button className=" text-white bg-teal-500 active:bg-teal-600 border-teal-600  font-light py-2 px-4 rounded active:outline-none active:shadow-outline border shadow cursor-pointer transition duration-300 w-full block text-center mb-2">
                Go to Dashboard
              </button>
            ) : (
              <div>
                <button className=" text-white bg-teal-500 active:bg-teal-600 border-teal-600  font-light py-2 px-4 rounded active:outline-none active:shadow-outline border shadow cursor-pointer transition duration-300 w-full block text-center mb-2">
                  Create Account
                </button>
                <button className="px-4 py-2 border rounded font-light border-gray-300 active:border-transparent active:text-teal-500 active:bg-white md:mt-4 lg:mt-0 float-right shadow md:float-none transition duration-300 w-full block text-center">
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
