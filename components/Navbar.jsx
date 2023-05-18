import React from "react";

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-white sticky top-0 z-50">
      <div className="w-full h-[10vh] flex flex-wrap items-center justify-between mx-auto p-9 sm:p-5">
        <a href="#" className="flex items-center">
          <span className="self-center font-semibold whitespace-nowrap text-black">
            Fabian Geitner
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-2 text-[#4c48a2] text-opacity-70 hover:text-opacity-100 ease-in duration-100"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-2 text-[#4c48a2] text-opacity-70 hover:text-opacity-100 ease-in duration-100"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-2 text-[#4c48a2] text-opacity-70 hover:text-opacity-100 ease-in duration-100"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
