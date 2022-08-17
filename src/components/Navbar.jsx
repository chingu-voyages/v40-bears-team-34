import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Importing React Icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// Importing logo
import logo from "../assets/logo.png";

// Responsive NavBar component that is present app-wide
// Routes ('/home', '/search/', 'results/'
const Navbar = () => {
  // Navigates user to main page
  const navigate = useNavigate("/");

  // State to keep track of which navBar icon is going to be desplayed
  // true = navBar is showing display close menu, false = navBar is not showing, display menu icon
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // regular size nav bar
    <div className="flex justify-between items-center h-24 w-[100%] mx-auto px-4 bg-white">
      <button onClick={() => navigate("/")}>
        <img src={logo} width="200px" alt="company logo" />
        {/* <h1 className="w-full text-3xl font-bold">APCH.</h1> */}
      </button>
      {/* {As soon as the width is smaller than the md size, it gets hidden
      } */}
      <ul className="hidden md:flex">
        <li>
          <NavLink className="p-4" to="/">
            Home
          </NavLink>
        </li>
        <strong>|</strong>
        <li>
          <NavLink className="p-4" to="/search">
            Search
          </NavLink>
        </li>
        <strong>|</strong>
        <li>
          <NavLink className="p-4" to="/results">
            Results
          </NavLink>
        </li>
      </ul>
      {/* Responsive size Nav Bar */}
      {/* {As soon as the width is bigger than the md size, it gets hidden */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r py-6 border-r-gray-900 bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img src={logo} width="200px" alt="company logo" />
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="p-4 border-b border-gray-600">
            <NavLink to="/search">Search</NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/results">Results</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
