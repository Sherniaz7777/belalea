import React from "react";
import "./AboutContent.css";
import aboutCon from "../../../assets/Image (7).png";
import tracktor from "../../../assets/Tractor.png";
import fabricka from "../../../assets/Chemical Plant.png";
// import strelka from "../../assets/Aerrow.png";
import strelka from "../../../assets/Aerrow.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutContent1 = () => {
  const {t, i18n} = useTranslation()
  return (
    <div>
      <div className="container">
        <div className="AboutContent-all">
          <img id="ab" src={aboutCon} alt="" />
          <div className="AboutContent-text-1">
            <h2>{t("О нас")}</h2>

            <h1>{t("Натуральне продукты - здоровое население")}</h1>

            <p>
              {t("Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.")}
              
            </p>

            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="AboutContent-Points">
              <div className="AboutContent-Points-1">
                <img src={tracktor} alt="" />
                <h4>{t("Современная сельхоз. техника")}</h4>
              </div>
              <div className="AboutContent-Points-2">
                <img src={fabricka} alt="" />
                <h4>{t("Выращивание без гормонов")}</h4>
              </div>
            </div>
            <NavLink className={"NavLink"} to={'/contact'}>
              <button>
                {t("Контакты")}
                
                <img src={strelka} alt="" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent1;
