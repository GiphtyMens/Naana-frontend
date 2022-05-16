import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Shops from "./components/Shops";
import Rated from "./components/Rated";
import Career from "./components/Career";

const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      {/* <Shops /> */}
      <Rated />
      <Career />
    </div>
  );
};

export default Home;
