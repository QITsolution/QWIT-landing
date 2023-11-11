import React from "react";

const Home = () => {
  return (
    <div name="home" className="h-full w-full">
      <div className="w-full flex flex-row justify-between items-center snap-center">
        <div
          className="bg-black w-full flex lg:mt-[7rem] lg:flex-row px-10
         flex-col justify-between items-center">
          <div className="flex flex-col items-start justify-center mx-2 lg:py-0 py-5">
            <img
              src={require("../assets/notification.png")}
              className="h-20 w-20 hover:animate-ping"
              alt=""
            />
            <p className="text-white font-bold lg:text-2xl md:text-5xl text-5xl">
              Reminder To Visit
            </p>
            <p className="text-white flex-none lg:text-lg md:text-3xl text-3xl">
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
            <p className="text-white font-bold lg:text-2xl md:text-5xl text-5xl">
              Preparation Tips
            </p>
            <p className="text-white flex-none lg:text-lg md:text-3xl text-3xl">
              If you have any specific preparations or instructions for next
              visit.
            </p>
          </div>
          <div className="">
            <img
              src={require("../assets/851b18b52adb006f0dc30486f410ed13.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className="flex lg:flex-row flex-col items-center justify-center">
  <div className=" h-auto lg:w-full md:w-full w-[25rem] flex flex-col items-center border-[3px] rounded-md border-[#735BFF] lg:mx-[10rem] py-14 px-20 my-6">
    <p className="lg:text-2xl md:text-5xl text-5xl">Enterprise</p>
    <p className="flex flex-row text-[red] items-center">
      <p>₹</p>
      <p className="lg:text-lg md:text-3xl text-3xl lg:my-0 my-3">15,000</p>
      <p className="lg:text-lg md:text-3xl text-3xl lg:my-0 my-3">/year</p>
    </p>
    {ent.map((val, id) => {
      return (
        <>
          <div className="flex items-center justify-center  py-3">
            <p key={id} className="lg:text-lg md:text-3xl text-xl ">
              {val}
            </p>
          </div>
          {id !== ent.length && id !== ent.length - 1 ? (
            <div className="border-[1px] w-[100%]"></div>
          ) : (
            ""
          )}
        </>
      );
    })}
    <div className="hover:opacity-100 opacity-40 duration-300 font-bold lg:text-lg md:text-3xl text-3xl cursor-pointer bg-[#735BFF] rounded-lg py-[2%] px-[4%] text-white my-5 ">
      Sign Up
    </div>
  </div>
</div>; */
}
