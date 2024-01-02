import footerbanner from "../assets/footerbanner.webp";

import facebookLogo from "../assets/facebook.webp?url";
import instagramLogo from "../assets/instagram.webp?url";
import linkedinLogo from "../assets/linkedin.webp?url";
import twitterLogo from "../assets/twitter.webp?url";
import { Link } from "react-scroll";

interface FooterRouter {
  // link uses Link names from react-scroll, usage similar to navBar
  name: string;
  link: string;
}
interface FooterRouterStylingEnabled {
  // link uses Link names from react-scroll, usage similar to navBar
  name: string;
  link: string | null;
  styling: boolean;
}

const Footer = () => {
  // using Link
  const prod: FooterRouter[] = [
    { name: "Home", link: "home" },
    { name: "Pricing", link: "pricing" },
    { name: "Contact Us", link: "contactus" },
    { name: "Features", link: "features" },
  ];
  const contactus: FooterRouterStylingEnabled[] = [
    // those with styling enabled, links are to be added later
    {
      name: "DigiFrills IT Software Inc. Vijayawada",
      link: null,
      styling: false,
    },
    { name: "Andhra Pradesh.", link: null, styling: false },
    { name: "sales.support@quantumwaveit.in", link: null, styling: false },
    { name: "Privacy Policy", link: "", styling: true },
    { name: "Terms & Conditions", link: "", styling: true },
  ];
  const feat = [
    "Schedule Online",
    "Increase Productivity",
    "Attract Customers",
    "Retain Customers",
  ];
  //   icons must only be added in the assets' root folder
  const socials = [
    { link: "https://facebook.com", icon: facebookLogo },
    { link: " https://www.linkedin.com/company/digifrills-it-solutions/", icon: linkedinLogo },
    { link: "https://instagram.com", icon: instagramLogo },
    { link: "https://twitter.com", icon: twitterLogo },
  ];
  return (
    <div name="aboutus" className="bg-slate-300 flex flex-col items-center ">
      <div className="h-full w-[80%] my-5">
        <div className="flex flex-row lg:h-[30rem] pt-10 justify-center ">
          <div className="flex flex-col lg:items-start lg:w-full px-4 items-center ">
            <img src={footerbanner} className="w-[16rem] h-[7rem]" alt="" />
            <p className="py-4 lg:w-[20rem] w-auto lg:px-0 md:px-20 px-2">
              DIGIFRILLS IT SOLUTIONS provides Softwares as a service for your
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
                      key={i}
                      src={v.icon}
                      alt=""
                    />
                  </a>
                );
              })}
            </div>
            <p className="  lg:w-[20rem] w-auto lg:px-0 md:px-20 px-2">
              All Rights Reserved @ 2023 DIGIFRILLS IT Privacy | Cookies |
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
                  <Link
                    to={v.link}
                    smooth={true}
                    duration={400}
                    key={i}
                    className="px-2 py-4 hover:underline cursor-pointer hover:underline-offset-4">
                    {v.name}
                  </Link>
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
                <p key={i} className="px-2 py-4 ">
                  {v}
                </p>
              );
            })}
          </div>
          <div className="w-full mx-10  lg:flex hidden flex-col lg:px-0 px-20">
            <p className="px-2 py-4  text-[#735BFF] text-xl font-bold">
              CONTACT US
            </p>
            {contactus.map((v, i) => {
              return v.link !== null ? (
                <a
                  href={v.link}
                  key={i}
                  className="px-2 py-4 cursor-pointer hover:underline hover:underline-offset-4">
                  <p>{v.name}</p>
                </a>
              ) : (
                <p key={i} className="px-2 py-4">
                  {v.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
