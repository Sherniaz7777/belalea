import React, { useEffect } from "react";
import "./AboutMain2.css";
import strelka from "../../../assets/Aerrow.png";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../store/slice/productSlice";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutMain2 = () => {
  const { products } = useSelector((state) => state.product);
   
  const {t, i18}= useTranslation()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div className="AboutMain2-all">
      <div className="container">
        <div className="AboutMain2-header">
          <h1>{t("Лучшие предложения месяца")}</h1>
          <NavLink className={"NavLink"} to={"/product"}>
            <button>
              {t("Смотреть все")}
               <img src={strelka} alt="" />
            </button>
          </NavLink>
        </div>
        <div className="AboutMain2-Card">
          {products?.slice(0, 4).map((el) => (
            <NavLink key={el.id} className={'NavLink'} to={`/detail/${el.id}`}>
              <div className="Card">
                <div className="category-name">{el.category}</div>
                <img width={292.42} src={el.img} alt="" />
                <br />
                <hr />
                <h4>{el.name}</h4>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMain2;
