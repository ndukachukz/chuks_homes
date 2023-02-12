import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <div className="flex items-center flex-shrink-0">
            <a href="#" title="" className="inline-flex">
              <span className="sr-only"> Rareblocks logo </span>
              <Image
                alt="Rareblocks logo"
                src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/logo.svg"
                width={0}
                height={8}
                className="w-auto h-8"
              />
            </a>
          </div>

          <div className="hidden lg:flex lg:justify-start lg:ml-16 lg:space-x-8 xl:space-x-14">
            <a
              href="#"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none hover:text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              All Artworks
            </a>

            <a
              href="#"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              All Artists
            </a>

            <a
              href="#"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Sell Your Artwork
            </a>
          </div>

          <div className="flex items-center justify-end ml-auto">
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Create Free Account
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Login
              </a>
            </div>

            <div className="flex items-center justify-end space-x-5">
              <button
                type="button"
                className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/*               <button
                type="button"
                className="relative p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>

                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                  3
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
