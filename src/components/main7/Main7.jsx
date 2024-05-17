import React from "react";
import "../main7/Main7.css";
import strelka from "../../assets/Aerrow.png";
import Mina7img1 from "../../assets/Image (5).png";
import Mian7img2 from "../../assets/Photo.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Main7 = () => {

  const {t, i18n} = useTranslation()
  return (
    <div style={{ marginBottom: 150 }}>
      <div className="container">
        <div className="Main7-Content">
          <div className="Main7-Content-1">
            <h1>{t("Новости")}</h1>
            <div className="Main7-Content-1-in">
              <h2>{t("Новости об органических продуктах и многом другом")}</h2>
            </div>
          </div>
          <div className="Main7-Content-2">
            <NavLink className={"NavLink"} to={"/blog"}>
              <button>
                {t("Больше новостей")}
                
                <img src={strelka} alt="" />
              </button>
            </NavLink>
          </div>
        </div>
        <div className="Main7-hero-all">
          <div className="Main7-hero-1">
            <div className="Main7-hero-1-in">
              <div>
                <>25</>
                <br />
                <>Авг.</>
              </div>
            </div>
            <div className="Main7-hero-1-text-all">
              <div className="Main7-hero-1-text">
                <h3>{t("Витаминная заправка для летнего салата")}</h3>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
                <NavLink className={"NavLink"} to={"/blog"}>
                  <button>
                    {t("Подробнее")}
                    
                    <img src={strelka} alt="" />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="Main7-hero-2">
            <div className="Main7-hero-1-in">
              <div>
                <>25</>
                <br />
                <>Окт.</>
              </div>
            </div>
            <div className="Main7-hero-1-text-all">
              <div className="Main7-hero-1-text">
                <h3>{t("Каих витаминов не хватает осенью?")}</h3>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
                <NavLink className={"NavLink"} to={"/blog"}>
                  <button>
                    {t("Подробнее")}
                    
                    <img src={strelka} alt="" />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main7;
