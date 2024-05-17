import React from "react";
import Hero from "../components/hero/Hero";
import Banner from "../components/banner/Banner";
import Main2 from "../components/main2/Main2";
import Main3 from "../components/main/Main3";
import Offer from "../components/offer/Offer";
import Mian5 from "../components/main5/Mian5";
import Main6 from "../components/main6/Main6";
import Main7 from "../components/main7/Main7";
import FooterTop from "../components/footer/FooterTop";
import AboutMain2 from "../components/about/aboutMain2/AboutMain2";

const Home = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <Main2 />
      <Offer />
      <Main3 />
      <AboutMain2 />
      <Mian5 />
      <Main6 />
      <Main7 />
      <FooterTop />
    </div>
  );
};

export default Home;
