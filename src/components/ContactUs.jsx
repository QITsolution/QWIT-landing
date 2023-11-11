import React from "react";

function ContactUs() {
  return (
    <div
      name="contactus"
      className=" flex flex-col w-full h-full items-center justify-center my-20">
      <p className=" lg:text-2xl md:text-3xl text-4xl text-center text-[#735BFF] font-bold ">
        Try “Salon it” hair salon software.
      </p>
      <div className="lg:text-2xl md:text-4xl text-3xl mt-5 hover:opacity-100 opacity-40 duration-300 text-slate-50 font-bold cursor-pointer bg-[#735BFF] rounded-lg py-2 px-4">
        Sign Up Now
      </div>
      <p className="my-6 lg:text-xl md:text-3xl text-2xl text-center lg:px-0 md:px-0 px-8">
        No credit card required! Our free plan is free forever.
      </p>
    </div>
  );
}

export default ContactUs;
