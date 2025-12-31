import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/cook-book.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className="lg:w-11/12 w- mx-auto bg-[rgba(255,249,249,0.5)] backdrop-blur-md flex justify-between items-center py-2 px-8 relative z-[1000]
                 max-sm:w-full max-sm:px-4 sm:w-full sm:px-4"
    >
      <div className="flex w-[10%] gap-4 items-center max-sm:w-[50%] max-sm:gap-2 sm:w-[50%]">
        <div className="w-1/12">
          <img src={logo} alt="" className="w-full" />
        </div>
        <h1 className="lg:text-2xl">
          FoodFun
        </h1>
      </div>

      <div className="block md:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-transparent border-none"
        >
          <i className="fa-solid fa-bars text-[20px]"></i>
        </button>
      </div>

      <div
        className={`
          flex justify-between w-[28%]

          /* Mobile */
          max-sm:flex-col max-sm:absolute max-sm:top-[48px] max-sm:right-0 
          max-sm:bg-white max-sm:w-[40%] max-sm:p-2 max-sm:shadow-md
          max-sm:transition-all max-sm:duration-300
          ${
            showMenu
              ? "max-sm:opacity-100 max-sm:pointer-events-auto max-sm:translate-y-0"
              : "max-sm:opacity-0 max-sm:pointer-events-none max-sm:-translate-y-5"
          }

          /* Small screens */
          sm:flex-col sm:absolute sm:top-[57px] sm:right-0 
          sm:bg-white sm:w-[35%] sm:p-3 sm:shadow-md
          sm:transition-all sm:duration-300
          ${
            showMenu
              ? "sm:opacity-100 sm:pointer-events-auto sm:translate-y-0"
              : "sm:opacity-0 sm:pointer-events-none sm:-translate-y-5"
          }

          /* Medium and above */
          md:static md:flex-row md:bg-transparent md:shadow-none 
          md:opacity-100 md:pointer-events-auto md:translate-y-0 md:w-[40%]
          lg:w-[35%]
        `}
      >
        <NavLink
          to="/category"
          className="text-black text-[20px] max-sm:text-[16px] sm:text-[18px]"
        >
          Category
        </NavLink>

        <NavLink
          to="/area"
          className="text-black text-[20px] max-sm:text-[16px] sm:text-[18px]"
        >
          Area
        </NavLink>

        <NavLink
          to="/ingredient"
          className="text-black text-[20px] max-sm:text-[16px] sm:text-[18px]"
        >
          Ingredients
        </NavLink>

        <NavLink
          to="/search"
          className="text-black text-[20px] max-sm:text-[16px] sm:text-[18px]"
        >
          Search
        </NavLink>
      </div>
    </nav>
  );
}