import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Features />
      <Pricing />
      <Services />
      <ContactUs />
    </div>
  );
}

export default App;
