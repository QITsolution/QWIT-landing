import React from "react";

const Services = () => {
  return (
    <div
      name="services"
      className="h-full min-h-screen w-full items-center justify-center flex flex-col ">
      <p>TODO:NEEDS FIXES</p>
      <p className="text-[#735BFF]">Your peace of mind is our top priority!</p>
      <div className="mx-[20rem] grid grid-cols-2 grid-rows-2 justify-center items-center ">
        <div className="flex flex-row border-2 border-[#735BFF] my-4 mx-20 pr-4 pt-4 pb-4 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={require("../assets/support.png")}
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <p className="flex">Super Support</p>
            <p className="flex">
              Salon It is supported by a team of dedicated professionals who are
              always available via email, chat, and phone.
            </p>
          </div>
        </div>
        <div className="flex flex-row border-2 border-[#735BFF] my-4 mx-20 pr-4 pt-4 pb-4 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={require("../assets/security.png")}
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <p className="flex">Safe & Security</p>
            <p className="flex">
              We take client data security very seriously. Your data is safe,
              backed-up on cloud, and you retain its complete ownership. Our
              application is hosted on Google Cloud which adheres to the highest
              standards of reliability and data security
            </p>
          </div>
        </div>
        <div className="flex flex-row border-2 border-[#735BFF] my-4 mx-20 pr-4 pt-4 pb-4 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={require("../assets/assist.png")}
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <p className="flex">Free Setup Assistance</p>
            <p className="flex">
              We know hair salons well. With easy onboarding and free
              personalized setup assistance from people who have onboarded
              thousands of hair salon businesses, you get started with “Salon
              It” in no time. Need to shift from your existing system? We take
              care of everything!
            </p>
          </div>
        </div>
        <div className="flex flex-row border-2 border-[#735BFF] my-4 mx-20 pr-4 pt-4 pb-4 rounded-md justify-center items-center">
          <img
            width={146}
            height={146}
            src={require("../assets/wordl.png")}
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <p className="flex">Multi-location Management</p>
            <p className="flex">
              We are ready to support your hair salon at every stage of your
              growth. When you expand your business to multiple locations,
              “Salon It” allows easy management of all your salon locations from
              a centralized admin portal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
