import React from "react";
import { LuSearchCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useContext } from "react";
import { Context } from "../Context-reducer";

function Header() {
  // const{initialstate}=useContext(Context)    // (just for testing perpous),taking out/unpacking the data(basket)  which was in initialstate from Context-reducer.jsx to use that basket data below 
  // const {basket} = initialstate
  return (
    <nav
      id="nav-bar"
      className="bg-black w-full flex items-center  h-12 sticky top-0 z-[100]" // position:sticky,top-0,z-index:100 are to hold the nav bar whenever the page is scrolled
    >
      <Link to={"/"} className="">
        <img
          src="https://img.freepik.com/free-vector/flat-design-
          atheism-logo-template_23-2149242249.jpg?size=338&ext=
          jpg&ga=GA1.1.98259409.1708992000&semt=ais"
          alt=""
          className="w-auto h-12 rounded-lg shadow-xl hover:shadow-white pl-2 object-cover "
        />
      </Link>
      <div id="search" className="flex ml-4 mt-10 mb-10">
        <input
          type="text"
          placeholder="Search items here..."
          className="  md:w-[300px] lg:w-[900px]  rounded-lg pl-2" //(for responsiveness) md for medium sized screen,lg means for large sized screen  
        />
        <LuSearchCheck className="size-5 mt-1 ml-1  text-yellow-500 hover:shadow-lg hover:text-green-500" />
      </div>
      <div id="nav-links" className="flex items-center justify-around text-yellow-600">

        <Link to={"/orders"}>
         <div className="ml-2 mr-2">
           <span className="shadow-lg hover:shadow-yellow-300">
           Services
           </span>
         </div>
        </Link>
        <Link to={""}>
         <div className="ml-2 mr-2">
           <span className="shadow-lg hover:shadow-yellow-300">
            Products
           </span>
         </div>
        </Link>
        <Link>
         <div className="ml-2 mr-2">
          <span className="shadow-lg hover:shadow-yellow-300">
            Sign up
          </span>
         </div>
        </Link>
        <Link>
        <div className="flex shadow-lg  hover:shadow-white text-yellow-300 rounded-lg ml-3 ">
        <PiShoppingCartSimpleBold className="size-5"/>
        <span className="shadow-lg hover:shadow-blue-500">
         {/* {basket.length} */} {/* using the basket data from initialstate which was in Context-reducer.jsx (destructured basket at the top of the page)*/}
        </span>
        </div>
        </Link>

      </div>
    </nav>
  );
}

export default Header;
