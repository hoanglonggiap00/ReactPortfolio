/** @format */

import React from "react";
import Header from "./Header";
import Particles from "./Particles";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Particles />
      <Resume />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
