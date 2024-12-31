import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import Project from "./Project";
import Contacts from "./Contacts";
import Certification from "./Certification";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Certification />
        <Project />
        <Contacts />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
export default App;
