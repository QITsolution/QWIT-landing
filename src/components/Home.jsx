import React from "react";

function Home() {
  return (
    <div name="home" className="pt-[7rem] h-full w-full ">
      {/* <div className=" snap-x">
        <img
          src={require("../assets/e12c0cd1c620e90f32ef75710db758f1.png")}
          alt="img"
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="bg-black flex flex-row justify-between items-center snap-center">
        <div className="bg-black flex flex-row justify-center items-center mx-40 ">
          <div className="flex flex-col items-start justify-center mr-[7rem]">
            <img
              src={require("../assets/notification.png")}
              className="h-20 w-20 hover:animate-ping"
              alt=""
            />
            <p className="text-white font-bold">Reminder To Visit</p>
            <p className="text-white flex-none">
              Sit and Relax, We have cool feature. Remainder for your next hair
              cut.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center mx-[7rem]">
            <img
              className="h-20 w-20 hover:animate-bounce"
              src={require("../assets/reminder.png")}
              alt=""
            />
            <p className="text-white font-bold">Preparation Tips</p>
            <p className="text-white ">
              If you have any specific preparations or instructions for next
              visit.
            </p>
          </div>
          <div className=" ml-[7rem]">
            <img
              src={require("../assets/851b18b52adb006f0dc30486f410ed13.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
