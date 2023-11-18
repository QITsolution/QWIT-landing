import React from "react";

import notificationImg from "../assets/notification.webp";
import reminderImg from "../assets/reminder.webp";
import homeImg from "../assets/home.webp";

const Home = () => {
  return (
    <div name="home" className="h-full w-full">
      <div className="w-full flex flex-row justify-between items-center ">
        <div
          className="w-full flex lg:flex-row px-10 lg:mt-20 bg-black 
         flex-col justify-between items-center">
          <div className="flex flex-col items-start justify-center mx-2 py-5">
            <img
              src={notificationImg}
              className="h-20 w-20 hover:animate-ping"
              alt=""
            />
            <p className="text-white font-bold lg:text-2xl md:text-3xl text-xl lg:my-0 my-5">
              Reminder To Visit
            </p>
            <p className="text-white flex-none lg:text-lg md:text-3xl text-xl">
              Sit and Relax, We have all the cool features. Reminders for your
              next hair cut.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center mx-2 lg:py-0 py-5">
            <img
              className="h-20 w-20 hover:animate-bounce"
              src={reminderImg}
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
            <img src={homeImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
