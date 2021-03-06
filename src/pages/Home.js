import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Best from "../components/Best";
import Cards from "../components/Cards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Provide from "../components/Provide";
import Rooms from "../components/Rooms";
import Welcome from "../components/Welcome";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Best />
      <Welcome />
      <Rooms />
      <About />
      <Cards />
      <Provide />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
