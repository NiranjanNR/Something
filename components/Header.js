import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex w-full justify-around py-10">
      <div className="flex space-x-20 items-center  w-1/2">
        <AiOutlineMenu className=" text-3xl" />
        <h1 className=" text-3xl font-extralight">Crave</h1>
        <input
          className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 w-full rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center space-x-3">
        <IoPersonOutline className=" text-3xl" />
        <div className="p-2 px-4 text-lg bg-yellow-100 rounded-lg">
          3
        </div>
      </div>

    </div>
  );
};

export default Header;
