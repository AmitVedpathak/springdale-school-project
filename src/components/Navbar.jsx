import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar text-black bg-blue-200 w-full md:px-5">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white"
            >
              <div className="flex flex-col text-black">
                <Link to="/about">About Us</Link>
                <Link to="/academics">Academics</Link>
                <Link to="/admissions">Admissions</Link>
                <Link to="/faculty">Faculty</Link>
                <Link to="/students">Students</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </ul>
          </div>
          <div className="flex items-center">
            <div>
              <img src="/images/logo.png?url" alt="" className="w-14 md:w-16" />
            </div>
            <Link to="/" className="font-bold md:text-xl">
              Springdale Public School
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex space-x-4 font-semibold">
            <Link to="/about" className="hover:text-accent hover:transition-all duration-300">About Us</Link>
            <Link to="/academics" className="hover:text-accent hover:transition-all duration-300">Academics</Link>
            <Link to="/admissions" className="hover:text-accent hover:transition-all duration-300">Admissions</Link>
            <Link to="/faculty" className="hover:text-accent hover:transition-all duration-300">Faculty</Link>
            <Link to="/students" className="hover:text-accent hover:transition-all duration-300">Students</Link>
            <Link to="/gallery" className="hover:text-accent hover:transition-all duration-300">Gallery</Link>
            <Link to="/contact" className="hover:text-accent hover:transition-all duration-300">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
