import React from "react";

function ContactUs() {
  return (
    <div
      name="contactus"
      className=" flex flex-col w-full h-full items-center justify-center">
      <p className="text-4xl text-[#735BFF] font-bold my-3">
        Try “Salon it” hair salon software.
      </p>
      <button className="bg-[#735BFF] text-white text-3xl my-10 px-4 py-2 rounded-md hover:opacity-100 opacity-70 duration-300 transition-opacity">
        SIGN UP NOW
      </button>
      <p className=" mt-4 mb-10">
        No credit card required! Our free plan is free forever.
      </p>
    </div>
  );
}

export default ContactUs;
