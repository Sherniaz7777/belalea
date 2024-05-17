import React from "react";
import "./Offer.css";
import ProductShop from "../product/productShop/ProductShop";
import Strelka from "../../assets/Aerrow.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Offer = () => {

  const {t, i18n} = useTranslation()
  return (
    <div className="offer">
      <div className="container">
        <h2>{t("Категории")}</h2>
        <h1>{t("Наши продукты")}</h1>
        <ProductShop />
        <div className="offerBtn">
          <NavLink className={'NavLink'} to={'/product'}>
            <button>
              {t("Смотреть всё")}
               <img src={Strelka} alt="" />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Offer;
