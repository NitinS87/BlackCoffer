import React, { useState } from "react";
import { DarkModeOutlined, Notifications } from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between lg:mr-9 max-w-[95%] items-center mx-auto lg:w-[80%] shadow-2xl border rounded-2xl p-4 my-2 sticky z-50 h-full">
      {/* Sidebar */}
      <div className="flex">
        {/* HamBurger Menu Logo*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 rounded-full shadow-2xl hover:border p-1 hover:bg-gray-200 lg:hidden"
          onClick={handleNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {/* <Sidebar /> */}
        {/* Search Box */}
        <div className="flex items-center justify-start mx-2">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search"
            className="pl-2 lg:w-96 outline-none"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="-ml-7 lg:mr-2 flex gap-2 items-center">
        {/* Theme Mode */}
        <div className="hover:bg-gray-300/40 rounded-full p-1">
          <DarkModeOutlined className="cursor-pointer" />
        </div>
        {/* Notification Icon */}
        <div className="hover:bg-gray-300/40 rounded-full p-1">
          <Badge badgeContent={4} color="primary" className="cursor-pointer">
            <Notifications />
          </Badge>
        </div>
        {/* Avatar */}
        <div className="hover:bg-gray-300/40 rounded-full p-1">
          <Avatar sx={{ width: 24, height: 24 }} />
        </div>
      </div>

      {/* Mobile Menu / Side Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side-drawer Menu */}

      <div
        className={
          nav
            ? "fixed top-0  left-0 w-[300px] h-screen bg-white z-10 duration-300 overflow-hidden"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <div
          className={`top-0 left-0 w-full h-screen border-r min-h-full absolute lg:flex flex-col px-4 mx-2 gap-2 z-50`}
        >
          {/* Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 absolute ml-56 mt-5 z-50 cursor-pointer"
            onClick={handleNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          {/* Logo */}
          <Link onClick={handleNav} to="/" className="flex pt-3 w-[80%]">
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

              <Link
                onClick={handleNav}
                to="/"
                className="p-2 font-semibold text-xl"
              >
                Dashboard
              </Link>
            </div>
            {/* Table */}

            <div className="border-b p-2 flex flex-col gap-1">
              <Link
                onClick={handleNav}
                to="/table/country"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Countries
              </Link>
              <Link
                onClick={handleNav}
                to="/table/region"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Regions
              </Link>
              <Link
                onClick={handleNav}
                to="/table/source"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Source
              </Link>
              <Link
                onClick={handleNav}
                to="/table/pestle"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Pestle
              </Link>
              <Link
                onClick={handleNav}
                to="/table/topic"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Topics
              </Link>
              <Link
                onClick={handleNav}
                to="/table/sector"
                className="text-lg hover:bg-gray-200/40 rounded-lg p-2 text-gray-500"
              >
                Sector
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
