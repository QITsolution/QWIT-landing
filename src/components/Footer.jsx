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
    { link: "https://facebook.com", icon: "fb.png" },
    { link: "https://linkedin.com", icon: "link.png" },
    { link: "https://instagram.com", icon: "insta.png" },
    { link: "https://twitter.com", icon: "twit.png" },
  ];
  return (
    <div
      name="aboutus"
      className="flex flex-row w-full h-[30rem] bg-slate-100 pt-10 justify-center">
      <div className="flex flex-col items-start w-[20%]">
        <img
          src={require("../assets/logo.png")}
          width={50}
          height={50}
          alt=""
        />
        <p className="py-4">
          “Salon It” is a simple, powerful and affordable software built for
          managing Salons, Spas & Nail Studios.
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
        <p className="px-3">
          All Rights Reserved @ 2023 Quantum Wave IT Privacy | Cookies | Terms
        </p>
      </div>
      <div className="w-[20%] ">
        <p className="px-2 py-4 text-[#735BFF] text-xl font-bold">PRODUCT</p>
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
      <div className="w-[20%]">
        <p className="px-2 py-4  text-[#735BFF] text-xl font-bold">FEATURES</p>
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
      <div className="w-[20%]">
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
  );
}

export default Footer;
