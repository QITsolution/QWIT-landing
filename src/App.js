import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Features />
      <Pricing />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
