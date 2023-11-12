import React from "react";

function Pricing() {
  const prof = [
    "Invoice Management",
    "Staff Management",
    "Appointments",
    "Combo Packages",
    "Expenses",
    "Combo Packages",
    "Loyalty Program",
  ];
  const ent = [
    "Unlimited Services",
    "Super Admin",
    "Single Customer Profile",
    "Role Customizations",
    "Multiple Locations",
    "Enterprise Reports",
    "24/7 Support",
  ];
  return (
    <div
      name="pricing"
      className="self-center h-full     min-h-screen w-full flex flex-col  items-center justify-center  ">
      <div className=" justify-center items-center flex flex-col ">
        <h1 className=" lg:my-20 my-5 lg:text-2xl md:text-5xl text-4xl text-[#735BFF]">
          Pricing
        </h1>
        <div className="flex lg:flex-row flex-col items-center justify-center">
          {/* prof */}
          <div className=" h-auto lg:w-[25rem] md:w-[30rem] sm:w-[3in] flex flex-col items-center border-[3px] rounded-md border-[#735BFF] lg:mx-[10rem] py-5 px-10 my-6">
            <p className="lg:text-4xl md:text-2xl sm:text-xl text-xl">
              Professional
            </p>
            <p className="flex flex-row text-[blue] items-center">
              <p>₹</p>
              <p className="lg:text-lg md:text-md sm:text-sm text-sm lg:my-2 font-bold ">
                10,000
              </p>
              <p className="lg:text-lg md:text-md sm:text-sm text-sm lg:my-2 ">
                /year
              </p>
            </p>
            {prof.map((val, id) => {
              return (
                <>
                  <div className="flex items-center lg:text-lg md:text-md sm:text-sm text-sm justify-center py-3">
                    <p
                      key={id}
                      className="lg:text-lg md:text-md sm:text-sm text-sm text-center">
                      {val}
                    </p>
                  </div>
                  {id !== prof.length && id !== prof.length - 1 ? (
                    <div className="border-[1px] w-[100%]"></div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
            <div className="hover:opacity-100 opacity-40 duration-300 font-bold lg:text-2xl md:text-xl text-lg cursor-pointer bg-[#735BFF] rounded-lg py-2 px-4 text-white my-5">
              Sign Up
            </div>
          </div>
          {/* ent */}
          <div className=" h-auto lg:w-[25rem] md:w-[30rem] sm:w-[3in] flex flex-col items-center border-[3px] rounded-md border-[#735BFF] lg:mx-[10rem] py-5 px-10 my-6">
            <p className="lg:text-4xl md:text-2xl sm:text-xl text-xl">
              Enterprise
            </p>
            <p className="flex flex-row text-[maroon] items-center">
              <p>₹</p>
              <p className="lg:text-lg md:text-md sm:text-sm text-sm lg:my-2 font-bold ">
                15,000
              </p>
              <p className="lg:text-lg md:text-md sm:text-sm text-sm lg:my-2 ">
                /year
              </p>
            </p>
            {ent.map((val, id) => {
              return (
                <>
                  <div className="flex items-center lg:text-lg md:text-md sm:text-sm text-sm justify-center py-3">
                    <p
                      key={id}
                      className="lg:text-lg md:text-md sm:text-sm text-sm text-center">
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
            <div className="hover:opacity-100 opacity-40 duration-300 font-bold lg:text-2xl md:text-xl text-lg cursor-pointer bg-[#735BFF] rounded-lg py-2 px-4 text-white my-5">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
