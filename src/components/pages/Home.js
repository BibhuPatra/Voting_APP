import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Mode from "../Mode";

function Home() {
  return (
    <>
      <HeroSection />
      <Mode />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
