import React from "react";
import "./Hero.css";
import Strelka from "../../assets/Aerrow.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n/i18n";
import "../../i18n/i18n"


const Hero = () => {
  const {t , i18n}= useTranslation()
  return (
    <section className="Hero-Home">
      <div className="hero-home">
        <div className="container">
          <div>
            <h3>{t("100% натурально")}</h3>
            <h1>{t("Масла и мука")}</h1>
            <h1>{t("из фермерского")}</h1>
            <h1>{t("сырья")}</h1>
            <NavLink className={"NavLink"} to={"/product"}>
              <button>
              {t("В КАТАЛОГ")} <img src={Strelka} alt="" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
