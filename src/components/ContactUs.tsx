// import React from "react";

// function ContactUs() {
//   return (
//     <div
//       name="contactus"
//       className=" flex flex-col w-full h-full items-center justify-center my-20">
//       <p className="lg:text-2xl md:text-5xl text-3xl text-center text-[#735BFF] font-bold lg:px-0 px-3">
//         Try “Salon it” hair salon software.
//       </p>
//       <div className="lg:text-2xl md:text-4xl text-3xl mt-5 hover:opacity-100 opacity-40 duration-300 text-slate-50 font-bold cursor-pointer bg-[#735BFF] rounded-lg py-2 px-4">
//         Sign Up Now
//       </div>
//       <p className="my-6 lg:text-xl md:text-3xl text-2xl text-center lg:px-0 md:px-0 px-8">
//         No credit card required! Our free plan is free forever.
//       </p>
//     </div>
//   );
// }
// export default ContactUs;
import { FiUser, FiMail, FiPhone, FiHome, FiEdit } from "react-icons/fi";
import React, { useEffect, useState } from "react";

function ContactUs() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [saloonName, setSaloonName] = useState("");
  const [comment, setComment] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    if (
      username.length > 0 &&
      phoneNumber.length > 0 &&
      email.length > 0 &&
      saloonName.length > 0 &&
      comment.length > 0
    ) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [username, phoneNumber, email, saloonName, comment]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `${username}, ${phoneNumber},${email},${saloonName}, ${comment}`
    );
  };
  return (
    <div
      name="contactus"
      className="w-full h-full py-10 px-4 items-center justify-center flex flex-col">
      <p className="lg:text-2xl md:text-xl sm:text-xl text-2xl">Contact Us</p>
      <form
        className="w-full h-full items-center justify-center flex flex-col"
        onSubmit={handleSubmit}>
        <div
          className="lg:w-[70%] w-auto h-full items-center justify-center flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2
        md:grid md:grid-cols-2 md:grid-rows-2">
          <div className=" flex flex-row  items-center justify-center">
            <FiUser className="w-6 h-6 mx-4" />
            <input
              className="h-auto lg:text-lg md:text-md sm:text-sm text-lg my-2 bg-slate-200 px-2 py-1 rounded-lg outline-none transition-transform duration-300 focus:scale-110"
              type="text"
              placeholder="Your Name"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className=" flex flex-row  items-center justify-center">
            <FiPhone className="w-6 h-6 mx-4" />
            <input
              className="h-auto lg:text-lg md:text-md sm:text-sm text-lg my-2 bg-slate-200 px-2 py-1 rounded-lg outline-none transition-transform duration-300 focus:scale-110"
              type="text"
              placeholder="Phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <div className=" flex flex-row  items-center justify-center">
            <FiMail className="w-6 h-6 mx-4" />
            <input
              className="h-auto lg:text-lg md:text-md sm:text-sm text-lg my-2 bg-slate-200 px-2 py-1 rounded-lg outline-none transition-transform duration-300 focus:scale-110"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className=" flex flex-row  items-center justify-center">
            <FiHome className="w-6 h-6 mx-4" />
            <input
              className="h-auto lg:text-lg md:text-md sm:text-sm text-lg my-2 bg-slate-200 px-2 py-1 rounded-lg outline-none transition-transform duration-300 focus:scale-110"
              type="text"
              placeholder="Saloon Name"
              onChange={(e) => {
                setSaloonName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex flex-row h-full w-full justify-center">
            <FiEdit className="h-6 w-6 mx-4 mt-4" />
            <textarea
              className=" lg:w-[7.7in] md:w-[30rem] w-[16.5rem] lg:text-xl md:text-md sm:text-lg my-2 bg-slate-200 px-2 py-1 rounded-lg outline-none"
              placeholder="Comment"
              rows={4}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
          <button
            disabled={!canSubmit}
            className={`w-auto h-auto lg:text-xl md:text-xl sm:text-lg my-2 bg-slate-200 px-4 py-2 rounded-lg
            self-center
          transition-transform duration-300 outline-none focus:scale-110
          ${
            !canSubmit
              ? "opacity-40 cursor-not-allowed"
              : " hover:bg-slate-600 duration-300 transition-all opacity-100"
          }`}
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
