/** @format */

import React from "react";
import Header from "./Header";
import Particles from "./Particles";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

const Home = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Particles />
      <Resume />
      <Portfolio />
    </React.Fragment>
  );
};

export default Home;
