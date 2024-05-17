import React from "react";
import AboutHero from "../components/about/aboutHero/AboutHero";
import AboutContent1 from "../components/about/aboutContent/AboutContent1";
import AboutMian1 from "../components/about/aboutMain1/AboutMian1";
import AboutMian2 from "../components/about/aboutMain2/AboutMain2";
import FooterTop from "./../components/footer/FooterTop";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <AboutContent1 />
      <AboutMian1 />
      <AboutMian2 />
      <FooterTop />
    </div>
  );
};

export default AboutUs;
