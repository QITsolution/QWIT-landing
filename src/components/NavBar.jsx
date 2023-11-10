import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className=" lg:flex hidden  w-full items-center backdrop-blur-md flex-col fixed z-50 ">
      {/* <div className="fixed w-full h-[5rem] lg:flex hidden justify-between  backdrop-blur-md items-center px-10 py-4"> */}
      <div
        className="h-[5rem] w-full px-4 lg:flex hidden 
      mt-4 rounded-lg  self-center lex-row justify-between items-center">
        <div>
          <img
            alt="icon"
            width={80}
            height={20}
            src={require("../assets/logo.png")}></img>
        </div>
        <div className="h-[5rem] w-[80%] rounded-lg  self-center flex lex-row justify-end items-center">
          <div className="h-[5rem] w-[80%] rounded-lg  self-center flex lex-row justify-between items-center">
            <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-xl cursor-pointer ">
              <Link to="home" smooth={true} duration={600}>
                Home
              </Link>
            </div>
            <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-xl cursor-pointer ">
              <Link to="features" smooth={true} duration={600}>
                Features
              </Link>
            </div>
            <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-xl cursor-pointer ">
              <Link to="pricing" smooth={true} duration={600}>
                Pricing
              </Link>
            </div>
            <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-xl cursor-pointer ">
              <Link to="services" smooth={true} duration={600}>
                Services
              </Link>
            </div>
            <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-xl cursor-pointer ">
              <Link to="contactus" smooth={true} duration={600}>
                ContactUs
              </Link>
            </div>
            <div className="hover:opacity-100 opacity-40 duration-300 font-normal text-xl cursor-pointer ">
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
  );
};

export default NavBar;
