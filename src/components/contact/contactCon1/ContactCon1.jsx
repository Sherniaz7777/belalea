import React from "react";
import "./ContactCon1.css"
import vector from "../../../assets/Vector (4).png";
import conatcEmailImg from "../../../assets/Group 15.svg"
import conatcPhoneImg from "../../../assets/Group 16.svg"
import HeroImg from '../../../assets/Photo (2).jpg'
import { useTranslation } from "react-i18next";


const ContactCon1 = () => {

  const {t, i18n}= useTranslation()
  return (
    <div>
      <div className="container">
        <div className="ContactContent-1">
          <img id="ContactCon-img" src={HeroImg} alt="" />
          <div className="ContactContentin-2">
            <h1>
            {t("Мы с удовольствием поговорим о том, как мы можем работать вместе.")}
              
            </h1>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="Contact-Points">
                <div className="Contact-Points-img">
                    <img src={conatcEmailImg} alt="" />

                </div>
                <div className="Contact-Points-text">
                    <h3>{t("Сообщение")}</h3>
                     <u>support@belalea.by</u>
                </div>
            </div>

            <div className="Contact-Points">
                <div className="Contact-Points-img">
                    <img src={conatcPhoneImg} alt="" />

                </div>
                <div className="Contact-Points-text">
                    <h3>{t("Звонок")}</h3>
                     <u>+375 (29) 789 789 5</u>
                </div>
            </div>

            <div className="logotip-contact">
              <div className="log-in">
                <i className="bi bi-instagram"></i>
              </div>
              <div className="log-in">
                <i className="bi bi-facebook"></i>
              </div>
              <div className="log-in">
                <i className="bi bi-twitter"></i>
              </div>
              <div className="log-in">
                <img src={vector} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCon1;
