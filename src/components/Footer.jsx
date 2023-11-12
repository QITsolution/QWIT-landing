import React from "react";

function Footer() {
  const prod = ["Home", "Pricing", "Contact Us", "Features"];
  const feat = [
    "Schedule Online",
    "Increase Productivity",
    "Attract Customers",
    "Retain Customers",
  ];
  const contactus = [
    "Salon It Software Inc. Vijayawada ",
    "Andhra Pradesh.",
    "contact@salonit.com",
    "Privacy Policy",
    "Terms & Conditions ",
  ];
  //   icons must only be added in the assets' root folder
  const socials = [
    { link: "https://facebook.com", icon: "facebook.png" },
    { link: "https://linkedin.com", icon: "linkedin.png" },
    { link: "https://instagram.com", icon: "instagram.png" },
    { link: "https://twitter.com", icon: "twitter.png" },
  ];
  return (
    <div name="aboutus" className="bg-slate-300 flex flex-col items-center ">
      <div className="h-full w-[80%] my-5">
        <div className="flex flex-row lg:h-[30rem] pt-10 justify-center ">
          <div className="flex flex-col lg:items-start lg:w-full px-4 items-center ">
            <img
              src={require("../assets/logo.png")}
              className="w-[9rem] h-[8rem]"
              alt=""
            />
            <p className="py-4 lg:w-[20rem] w-auto lg:px-0 md:px-20 px-2">
              Quantum Wave IT provides Softwares as a service for your
              businesses to work better, faster and with increased productivity.
            </p>

            <div className="flex flex-row py-4 justify-between items-center">
              {socials.map((v, i) => {
                return (
                  <a href={`${v.link}`} key={i}>
                    <img
                      className="mx-2 opacity-40 hover:opacity-100 duration-300 transition-opacity"
                      height={50}
                      width={50}
                      src={require(`../assets/${v.icon}`)}
                      alt=""
                    />
                  </a>
                );
              })}
            </div>
            <p className="  lg:w-[20rem] w-auto lg:px-0 md:px-20 px-2">
              All Rights Reserved @ 2023 Quantum Wave IT Privacy | Cookies |
              Terms
            </p>
          </div>
          <div className="w-full mx-10 lg:flex hidden flex-col ">
            <p className="px-2 py-4 text-[#735BFF] text-xl font-bold">
              PRODUCT
            </p>
            <div className="flex lg:flex-col ">
              {prod.map((v, i) => {
                return (
                  <a href="/">
                    <p
                      className="px-2 py-4 hover:underline cursor-pointer hover:underline-offset-4"
                      key={i}>
                      {v}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="w-full mx-10  lg:flex hidden flex-col lg:px-0 px-20">
            <p className="px-2 py-4  text-[#735BFF] text-xl font-bold">
              FEATURES
            </p>
            {feat.map((v, i) => {
              return (
                <a href="/">
                  <p
                    key={i}
                    className="px-2 py-4 hover:underline cursor-pointer hover:underline-offset-4">
                    {v}
                  </p>
                </a>
              );
            })}
          </div>
          <div className="w-full mx-10  lg:flex hidden flex-col lg:px-0 px-20">
            <p className="px-2 py-4  text-[#735BFF] text-xl font-bold">
              CONTACT US
            </p>
            {contactus.map((v, i) => {
              return (
                <a href="/">
                  <p
                    key={i}
                    className="px-2 py-4 hover:underline cursor-pointer hover:underline-offset-4">
                    {v}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
