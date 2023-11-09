import React from "react";

function Features() {
  return (
    <div
      name="features"
      className="items-center justify-center text-[25px] w-full flex flex-col">
      <div>
        <div className="flex flex-col justify-center">
          <p className="text-[#735BFF] self-center mt-[7rem]">
            We Used advanced Technologies
          </p>
          <div className="w-full h-[20rem] flex flex-row justify-between items-center ">
            <div className="flex flex-col h-100 w-100 items-center justify-center mx-20 ">
              <div className="border-[10px] rounded-lg border-[#735BFF]">
                <img
                  src={require("../assets/ai.jpg")}
                  alt=""
                  className=""
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-[18px]">AI Integration</p>
            </div>
            <div className="flex flex-col h-100 w-100 items-center justify-center mx-20 ">
              <div className="border-[10px] rounded-lg border-[#735BFF]">
                <img
                  src={require("../assets/ease.jpg")}
                  alt=""
                  className=""
                  width={100}
                  height={100}
                />
              </div>

              <p className="text-[18px]">Easy to Use</p>
            </div>
            <div className="flex flex-col h-100 w-100 items-center justify-center mx-20 ">
              <div className="border-[10px] rounded-lg border-[#735BFF]">
                <img
                  src={require("../assets/chatbot.jpg")}
                  alt=""
                  className=""
                  width={100}
                  height={100}
                />
              </div>

              <p className="text-[18px]">Chat Bot</p>
            </div>
            <div className="flex flex-col h-100 w-100 items-center justify-center mx-20 ">
              <div className="border-[10px] rounded-lg border-[#735BFF]">
                <img
                  src={require("../assets/whatsa.jpg")}
                  alt=""
                  className=""
                  width={100}
                  height={100}
                />
              </div>

              <p className="text-[18px]">WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
