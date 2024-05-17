import React from "react";
import "./ContactCon2.css"
import adres from "../../../assets/Location.png"
import { useTranslation } from "react-i18next";

const ContactCon2 = () => {

  const {t, i18n} = useTranslation()
  return (
    <div className="container">
      <div className="ContactCon2-img">
        <div className="ContactCon2-text-all">
          <div className="ContactCon2-text">
            <h2>{t("Где мы?")}</h2>
            <h1>{t("Наш адресс")}</h1>
            <p>{t("Мы находимся в самом экологически чистом районе Беларуси.")}</p>
            <div className="ContactCon2-adres">
              <img src={adres} alt="" />
              <div className="contact-adres">
                <h4>{t("Офис:")}</h4>
                <p>{t("г.Клецк, ул. Нагдаляна")}</p>
              </div>
            </div>
            <div className="ContactCon2-adres">
              <img src={adres} alt="" />
              <div className="contact-adres">
                <h4>{t("Производство")}</h4>
                <p>{t("г.Клецк, ул. Нагдаляна")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCon2;
