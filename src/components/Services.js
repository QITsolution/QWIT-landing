import React from "react";

const Services = () => {
  return (
    <div
      name="services"
      className="h-full min-h-screen w-full items-center justify-center flex flex-col ">
      <p className="text-[#735BFF] lg:text-2xl md:text-5xl text-3xl text-center mb-[3rem] mt-[7rem]">
        Your peace of mind is our top priority!
      </p>
      <div className="lg:mx-[20rem] w-full h-full lg:grid lg:grid-cols-2 lg:grid-rows-2 flex flex-col justify-center items-center ">
        <div className="flex lg:flex-row md:flex-row flex-col border-2 border-[#735BFF] my-4 mx-20 pr-4 pt-4 pb-4 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={require("../assets/support.png")}
            alt=""
          />
          <div className="flex flex-col justify-center items-center w-auto lg:h-auto h-auto min-h-[14rem]">
            <p className="flex text-xl">Super Support</p>
            <p className="flex lg:px-0 p-3 text-center">
              Salon It is supported by a team of dedicated professionals who are
              always available via email, chat, and phone.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col border-2 border-[#735BFF] my-4 mx-20 pr-4 pt-4 pb-4 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={require("../assets/security.png")}
            alt=""
          />
          <div className="flex flex-col justify-center items-center w-auto lg:h-auto h-auto min-h-[14rem]">
            <p className="flex text-xl">Safe & Security</p>
            <p className="flex lg:px-0 p-3 text-center">
              We take client data security very seriously. Your data is safe,
              backed-up on cloud, and you retain its complete ownership. Our
              application is hosted on Google Cloud which adheres to the highest
              standards of reliability and data security
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col border-2 border-[#735BFF] my-4 mx-20 pr-4 pt-4 pb-4 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={require("../assets/assist.png")}
            alt=""
          />
          <div className="flex flex-col justify-center items-center w-auto lg:h-auto h-auto min-h-[14rem]">
            <p className="flex text-xl">Free Setup Assistance</p>
            <p className="flex lg:px-0 p-3 text-center">
              We know hair salons well. With easy onboarding and free
              personalized setup assistance from people who have onboarded
              thousands of hair salon businesses, you get started with “Salon
              It” in no time. Need to shift from your existing system? We take
              care of everything!
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col border-2 border-[#735BFF] my-4 mx-20 pr-4 pt-4 pb-4 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={require("../assets/world.png")}
            alt=""
          />
          <div className="flex flex-col justify-center items-center w-auto lg:h-auto h-auto min-h-[14rem]">
            <p className="flex text-xl">Multi-location Management</p>
            <p className="flex lg:px-0 p-3 text-center">
              We are ready to support your hair salon at every stage of your
              growth. When you expand your business to multiple locations,
              “Salon It” allows easy management of all your salon locations from
              a centralized admin portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
