import React from "react";
import { LuSearchCheck } from "react-icons/lu";

function Header() {
  return (
    <nav id="nav-bar" className="bg-black w-full flex items-center h-12">
      <img
        src="https://img.freepik.com/free-vector/flat-design-atheism-logo-template_23-2149242249.jpg?size=338&ext=jpg&ga=GA1.1.98259409.1708992000&semt=ais"
        alt=""
        className=" w-14 h-14 rounded-lg shadow-lg shadow-blue-500"
      />
      <div id="search" className="flex">
        <input
          type="text"
          placeholder="search here..."
          className="w-[400px] ml-12 mt-10 mb-10 rounded-lg pl-2 "
        />
        <LuSearchCheck className="size-5 mt-10 ml-1 hover:shadow-lg " />
      </div>
    </nav>
  );
}

export default Header;
