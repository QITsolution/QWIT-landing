import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const handleSidebar = () => {
    setSideBar((prev) => !prev);
  };
  return (
    <div>
      <div className="lg:flex hidden  w-full items-center backdrop-blur-md flex-col fixed z-50 ">
        <div
          className="h-[5rem] w-full px-4 lg:flex hidden 
      mt-4 rounded-lg  self-center lex-row justify-between items-center">
          <div>
            <img
              alt="icon"
              className="w-100 h-100"
              src={require("../assets/logo.png")}></img>
          </div>
          <div className="h-[5rem] w-[80%] rounded-lg  self-center flex lex-row justify-end items-center">
            <div className="h-[5rem] w-[80%] rounded-lg  self-center flex lex-row justify-between items-center">
              <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer my-10 lg:text-lg md:text-5xl">
                <Link to="home" smooth={true} duration={600}>
                  Home
                </Link>
              </div>
              <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer my-10 lg:text-lg md:text-5xl">
                <Link to="features" smooth={true} duration={600}>
                  Features
                </Link>
              </div>
              <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer my-10 lg:text-lg md:text-5xl">
                <Link to="pricing" smooth={true} duration={600}>
                  Pricing
                </Link>
              </div>
              <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer my-10 lg:text-lg md:text-5xl">
                <Link to="services" smooth={true} duration={600}>
                  Services
                </Link>
              </div>
              <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer my-10 lg:text-lg md:text-5xl">
                <Link to="contactus" smooth={true} duration={600}>
                  ContactUs
                </Link>
              </div>
              <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer my-10 lg:text-lg md:text-5xl">
                <Link to="aboutus" smooth={true} duration={600}>
                  About Us
                </Link>
              </div>
              <div className="hover:opacity-100 opacity-70 duration-300 font-normal text-xl cursor-pointer text-[#735BFF]">
                <a href="http://localhost:3000/login">
                  <Link to="login" smooth={true} duration={600}>
                    Login
                  </Link>
                </a>
              </div>
              <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-xl cursor-pointer bg-[#735BFF] px-4 py-2 text-white rounded-md">
                <Link to="signup" smooth={true} duration={600}>
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={handleSidebar}
        className="fixed lg:hidden top-4 right-5  z-20">
        {!sideBar ? (
          <FaBars
            className="bg-slate-500  rounded-md h-12 w-12 p-2"
            size={40}
          />
        ) : (
          <FaTimes
            className="bg-slate-500  rounded-md h-12 w-12 p-2"
            size={40}
          />
        )}
      </div>
      <div
        className={`${
          sideBar
            ? "fixed z-10 h-screen w-screen flex flex-col items-center justify-center backdrop-brightness-50 backdrop-blur-3xl"
            : "hidden"
        }`}>
        <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer text-[#defffe] my-7 lg:text-lg md:text-5xl  ">
          <Link to="home" onClick={handleSidebar} smooth={true} duration={600}>
            Home
          </Link>
        </div>
        <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer text-[#defffe] my-7 lg:text-lg md:text-5xl  ">
          <Link
            to="features"
            onClick={handleSidebar}
            smooth={true}
            duration={600}>
            Features
          </Link>
        </div>
        <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer text-[#defffe] my-7 lg:text-lg md:text-5xl  ">
          <Link
            to="pricing"
            onClick={handleSidebar}
            smooth={true}
            duration={600}>
            Pricing
          </Link>
        </div>
        <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer text-[#defffe] my-7 lg:text-lg md:text-5xl  ">
          <Link
            to="services"
            onClick={handleSidebar}
            smooth={true}
            duration={600}>
            Services
          </Link>
        </div>
        <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer text-[#defffe] my-7 lg:text-lg md:text-5xl  ">
          <Link
            to="contactus"
            onClick={handleSidebar}
            smooth={true}
            duration={600}>
            ContactUs
          </Link>
        </div>
        <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer text-[#defffe] my-7 lg:text-lg md:text-5xl  ">
          <Link
            to="aboutus"
            onClick={handleSidebar}
            smooth={true}
            duration={600}>
            About Us
          </Link>
        </div>
        <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-5xl cursor-pointer text-[#defffe] my-7 lg:text-lg md:text-5xl  ">
          <a href="http://localhost:3000/login">
            <Link to="login" smooth={true} duration={600}>
              Login
            </Link>
          </a>
        </div>
        <div className="hover:opacity-100 opacity-40 duration-300 font-bold text-5xl cursor-pointer bg-[#735BFF] rounded-lg py-[2%] px-[4%] text-[#defffe] my-10 lg:text-lg md:text-5xl">
          <Link to="signup" smooth={true} duration={600}>
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
