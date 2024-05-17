import React from "react";
import "../banner/Banner.css";
import { useTranslation } from "react-i18next";

const Banner = () => {

  const {t, i18n}=useTranslation()
  return (
    <div className="container">
      <div className="Banner">
        <div className="banner-1">
          <div>
            <h3>{t("Новинки!")}</h3>
            <h2>{t("Свежайшее")}</h2>
            <h2>{t("штирийское")}</h2>
            <h2>{t("масло")}</h2>
          </div>
        </div>
        <div className="banner-2">
          <div>
            <h3>{t("Скидка")}</h3>
            <h2>{t("Скидка 20%")}</h2>
            <h2>{t("за подписку")}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
