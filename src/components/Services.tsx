import React from "react";

import support from "../assets/support.png";
import security from "../assets/security.png";
import assist from "../assets/assist.png";
import world from "../assets/world.png";

const Services = () => {
  return (
    <div
      name="services"
      className="h-full min-h-screen   w-full items-center justify-center flex flex-col ">
      <p className="text-[#735BFF] px-10 lg:text-2xl md:text-xl sm:text-xl text-2xl text-center mb-[3rem] mt-[7rem]">
        Your peace of mind is our top priority!
      </p>
      <div className="lg:w-[85%] h-full lg:grid lg:grid-cols-2 lg:grid-rows-2 flex flex-col justify-center items-center  ">
        <div className="lg:w-auto md:w-[40rem] w-[20rem] flex  lg:flex-row md:flex-row flex-col border-2 border-[#735BFF] mx-5 my-6 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={support}
            alt=""
          />
          <div className="flex flex-col justify-center text-center items-center w-auto lg:h-auto h-auto min-h-[14rem] lg:mx-10">
            <p className="flex text-xl text-center">Super Support</p>
            <p className="flex lg:px-0 p-5 text-justify">
              Quantum Wave IT is supported by a team of dedicated professionals
              who are always available via email, chat, and phone.
            </p>
          </div>
        </div>
        <div className="lg:w-auto md:w-[40rem] w-[20rem] flex  lg:flex-row md:flex-row flex-col border-2 border-[#735BFF] mx-5 my-6 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={security}
            alt=""
          />
          <div className="flex flex-col justify-center text-center items-center w-auto lg:h-auto h-auto min-h-[14rem] lg:mx-10">
            <p className="flex text-xl">Safe & Security</p>
            <p className="flex lg:px-0 p-5 text-justify">
              We take client data security very seriously. Your data is safe,
              backed-up on cloud, and you retain its complete ownership. Our
              application is hosted on Google Cloud which adheres to the highest
              standards of reliability and data security
            </p>
          </div>
        </div>
        <div className="lg:w-auto md:w-[40rem] w-[20rem] flex  lg:flex-row md:flex-row flex-col border-2 border-[#735BFF] mx-5 my-6 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={assist}
            alt=""
          />
          <div className="flex flex-col justify-center text-center items-center w-auto lg:h-auto h-auto min-h-[14rem] lg:mx-10">
            <p className="flex text-xl">Free Setup Assistance</p>
            <p className="flex lg:px-0 p-5 text-justify">
              We know hair salons well. With easy onboarding and free
              personalized setup assistance from people who have onboarded
              thousands of hair salon businesses, you get started with “Salon
              It” in no time. Need to shift from your existing system? We take
              care of everything!
            </p>
          </div>
        </div>
        <div className="lg:w-auto md:w-[40rem] w-[20rem] flex  lg:flex-row md:flex-row flex-col border-2 border-[#735BFF] mx-5 my-6 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={world}
            alt=""
          />
          <div className="flex flex-col justify-center text-center items-center w-auto lg:h-auto h-auto min-h-[14rem] lg:mx-10">
            <p className="flex text-xl text-center">
              Multi-location Management
            </p>
            <p className="flex lg:px-0 p-5 text-justify">
              We are ready to support your hair salon at every stage of your
              growth. When you expand your business to multiple locations,
              “Quantum Wave IT” allows easy management of all your salon
              locations from a centralized admin portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
