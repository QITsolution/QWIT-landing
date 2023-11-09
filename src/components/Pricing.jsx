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
      className="self-center h-full min-h-screen flex flex-col items-center justify-center  ">
      <div className=" justify-center items-center flex flex-col ">
        <h1 className="text-4xl">Pricing</h1>
        {/* prof */}
        <div className="flex flex-row items-center justify-center ">
          <div className="flex flex-col items-center border-[3px] rounded-md border-[#735BFF] mx-[10rem] py-14 px-20">
            <p className="text-[45px]">Professional</p>
            <p className="flex flex-row text-[red] items-center">
              <p>₹</p>
              <p className="text-[30px]">10,000</p>
              <p className="text-[30px]">/year</p>
            </p>
            {prof.map((val, id) => {
              return (
                <>
                  <div className="flex items-center justify-center  py-3">
                    <p key={id} className="text-[30px]">
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
          </div>
          {/* ent */}
          <div className="flex flex-row items-center justify-center ">
            <div className="flex flex-col items-center border-[3px] rounded-md border-[#735BFF] mx-[10rem] py-14 px-20">
              <p className="text-[45px]">Enterprise</p>
              <p className="flex flex-row text-[green] items-center">
                <p>₹</p>
                <p className="text-[30px]">15,000</p>
                <p className="text-[30px]">/year</p>
              </p>
              {ent.map((val, id) => {
                return (
                  <>
                    <div className="flex items-center justify-center  py-3">
                      <p key={id} className="text-[30px]">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
