import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="top-0 left-0 w-[15%] border-r min-h-full lg:!absolute hidden lg:flex flex-col px-4 mx-2 gap-2 z-50 sticky">
      {/* Logo */}
      <Link to="/" className="flex pt-2">
        <img
          src="https://cryptologos.cc/logos/v-systems-vsys-logo.png"
          alt="logo"
          className="w-10 "
        />
        <h1 className="font-bold text-4xl ml-2 text-[#ff8836]">Vuexy</h1>
      </Link>
      <div className="flex flex-col gap-2 mt-2">
        {/* Items */}
        <div className="p-2 hover:bg-gray-200/40 rounded-lg cursor-pointer flex items-center text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
            />
          </svg>

          <Link to="/" className="p-2 font-semibold text-xl">
            Dashboard
          </Link>
        </div>
        {/* Table */}

        <div className="border-b p-2 flex flex-col gap-1">
          <Link
            to="/table/country"
            className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
          >
            Countries
          </Link>
          <Link
            to="/table/region"
            className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
          >
            Regions
          </Link>
          <Link
            to="/table/source"
            className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
          >
            Source
          </Link>
          <Link
            to="/table/pestle"
            className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
          >
            Pestle
          </Link>
          <Link
            to="/table/topic"
            className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
          >
            Topics
          </Link>
          <Link
            to="/table/sector"
            className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
          >
            Sector
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
