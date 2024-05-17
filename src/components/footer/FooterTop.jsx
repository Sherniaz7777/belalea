import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const FooterTop = () => {

  const {t, i18n} = useTranslation()
  return (
    <div>
      <div className="container">
        <div className="Footer-top-all">
          <div className="Footer-top-1">
            <h1>{t("Узнайте первыми о новых акциях!")}</h1>
          </div>
          <div className="Footer-top-2">
            <form>
                <input type="text" placeholder={t("Введите ваш e-mail адресс")} typeof="email"/>
                <button type="submit">{t("Подписаться")}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
