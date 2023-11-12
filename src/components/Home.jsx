import React from "react";

const Home = () => {
  return (
    <div name="home" className="h-full w-full">
      <div className="w-full flex flex-row justify-between items-center">
        <div
          className="bg-black w-full flex lg:mt-[7rem] lg:flex-row px-10
         flex-col justify-between items-center">
          <div className="flex flex-col items-start justify-center mx-2 lg:py-0 py-5">
            <img
              src={require("../assets/notification.png")}
              className="h-20 w-20 hover:animate-ping"
              alt=""
            />
            <p className="text-white font-bold lg:text-2xl md:text-3xl text-xl lg:my-0 my-5">
              Reminder To Visit
            </p>
            <p className="text-white flex-none lg:text-lg md:text-3xl text-xl">
              Sit and Relax, We have cool feature. Remainder for your next hair
              cut.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center mx-2 lg:py-0 py-5">
            <img
              className="h-20 w-20 hover:animate-bounce"
              src={require("../assets/reminder.png")}
              alt=""
            />
            <p className="text-white font-bold lg:text-2xl md:text-3xl text-xl  lg:my-0 my-5">
              Preparation Tips
            </p>
            <p className="text-white flex-none lg:text-lg md:text-3xl text-xl">
              If you have any specific preparations or instructions for next
              visit.
            </p>
          </div>
          <div className="">
            <img src={require("../assets/home.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
