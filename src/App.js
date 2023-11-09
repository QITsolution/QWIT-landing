import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Features />
      <Pricing />
      <ContactUs />
    </div>
  );
}

export default App;
