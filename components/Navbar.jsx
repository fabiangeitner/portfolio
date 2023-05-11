import React from "react";

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-50 sticky top-0">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-9 sm:p-5">
        <a href="#" className="flex items-center">
          <span className="self-center font-semibold whitespace-nowrap text-black">
            Fabian Geitner
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
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
