import React from "react";
import "./AboutMain1.css";
import AboutMain1Img from "../../../assets/Image (8).png";
import AboutMainIcon from "../../../assets/Icon (2).png";
import Aboutic1 from "../../../assets/Icon (2).svg";
import Aboutic2 from "../../../assets/Icon (3).svg";
import Aboutic3 from "../../../assets/Icon (4).svg";
import { useTranslation } from "react-i18next";

const AboutMian1 = () => {
  

  const {t, i18n}=useTranslation()
  return (
    <div className="AboutMain1-alll">
      <div className="container">
        <div className="AboutMain1-all">
          <div className="AboutMain1-text">
            <h2>{t("Почему мы?")}</h2>
            <h1>{t("Мы закупаем семена и орехи у лучших фермеров.")}</h1>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className="AboutMain1-Points-1">
              <img src={AboutMainIcon} alt="" />
              {t("100% Натуральные продукты")}
              
            </div>
            <p style={{ marginLeft: 60 }}>
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
            <div className="AboutMain1-Points-2">
              <img src={AboutMainIcon} alt="" />
              {t("Сертификаты качества и соответсвия")}
              
            </div>
            <p style={{ marginLeft: 60 }}>
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </p>
          </div>
          <img id="AbMain1" src={AboutMain1Img} alt="" />
        </div>
        <div className="AbMain1-Content">
          <div className="AbMain1-Content-in">
            <div>
              <div className="AbMain1-Content-img">
                <img src={Aboutic1} alt="" />
              </div>
              <br />
              <h5>{t("Доступность")}</h5>
              <br />
              <p style={{margin:"0px 35px 0px 38px"}}>{t("Наша продукция во всех гипермаркетах")}</p>
            </div>
          </div>

          <div className="AbMain1-Content-in">
            <div>
              <div className="AbMain1-Content-img">
                <img src={Aboutic2} alt="" />
              </div>
              <br />
              <h5>{t("100% Свежесть")}</h5>
              <br />
              <p style={{margin:"0px 35px 0px 38px"}}>{t("Мы - местный производитель")}</p>
            </div>
          </div>

          <div className="AbMain1-Content-in">
            <div>
              <div className="AbMain1-Content-img">
                <img src={Aboutic3} alt="" />
              </div>
              <br />
              <h5>{t("Поддержка")}</h5>
              <br />
              <p style={{margin:"0px 35px 0px 38px"}}>{t("Мы всегда готовы ответить на все вопросы")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMian1;
