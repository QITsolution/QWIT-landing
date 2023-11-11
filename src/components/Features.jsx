import React from "react";

function Features() {
  return (
    <div
      name="features"
      className="items-center justify-center text-[25px] w-full h-full flex flex-col">
      <div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#735BFF] lg:text-2xl md:text-5xl text-3xl text-center mb-[3rem] mt-[7rem]">
            We Used advanced Technologies
          </p>
          <div className="w-full lg:flex lg:flex-row lg:mx-[10rem] justify-between items-center">
            <div className="flex flex-col items-center justify-center">
              <div className="  border-[6px] rounded-lg border-[#735BFF]">
                <img
                  src={require("../assets/ai.jpg")}
                  alt=""
                  className="lg:w-40 lg:h-40 md:h-[15rem] md:w-[15rem] w-[12rem] h-[12rem]"
                />
              </div>
              <p className="lg:text-lg md:text-3xl text-xl my-5">
                AI Integration
              </p>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className=" border-[6px] rounded-lg border-[#735BFF]">
                <img
                  src={require("../assets/ease.jpg")}
                  alt=""
                  className="lg:w-40 lg:h-40 md:h-[15rem] md:w-[15rem] w-[12rem] h-[12rem]"
                />
              </div>

              <p className="lg:text-lg md:text-3xl text-xl my-5">Easy to Use</p>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className=" border-[6px] rounded-lg border-[#735BFF]">
                <img
                  src={require("../assets/chatbot.jpg")}
                  alt=""
                  className="lg:w-40 lg:h-40 md:h-[15rem] md:w-[15rem] w-[12rem] h-[12rem]"
                />
              </div>

              <p className="lg:text-lg md:text-3xl text-xl my-5">Chat Bot</p>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className=" border-[6px] rounded-lg border-[#735BFF]">
                <img
                  src={require("../assets/whatsa.jpg")}
                  alt=""
                  className="lg:w-40 lg:h-40 md:h-[15rem] md:w-[15rem] w-[12rem] h-[12rem]"
                />
              </div>

              <p className="lg:text-lg md:text-3xl text-xl my-5">WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
