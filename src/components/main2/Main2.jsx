import React from "react";
import "../main2/Main2.css";
import Strelka from "../../assets/Aerrow.png";
import HomeIcons from "../../assets/Icon.png";
import HomeIcons1 from "../../assets/Icon (1).png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Main2 = () => {

  const {t, i18n} = useTranslation()
  return (
    <div className="Home-About">
      <div className="container">
        <div className="Home-About-in1">
          <div className="Home-About-in">
            <div>
              <h3>{t("О нас")}</h3>
              <h2>
              {t("Мы работаем только с качественным сырьём от местных фермеров")}
                
              </h2>
              <p>
              {t("Работа с местными фермерами приносит производственным компаниям преимущество в виде высококачественного сырья, укрепляет местное сообщество, снижает экологический след и способствует устойчивости цепочки поставок, обеспечивая надежность и прозрачность.")}
 
              </p>
              <div className="Home-Points">
                <img src={HomeIcons} alt="" />
                <div>
                  <h4>{t("Только натуральная продукция")}</h4>
                  <h5>{t("Полагаясь на природу, мы предлагаем продукты без искусственных добавок, гарантируя вам чистоту и качество.")}</h5>
                </div>
              </div>
              <div className="Home-Points-2">
                <img src={HomeIcons1} alt="" />

                <div>
                  <h4>{t("Высокие стандарты качества")}</h4>
                  <h5> {t("На каждом этапе производства мы стремимся к совершенству, чтобы вы могли наслаждаться продуктами с превосходным качеством и вкусом.")}
                  </h5>
                </div>
              </div>
              <NavLink to={'/about'}>

              <button>{t("Подробнее")}
                 <img src={Strelka} alt="" />
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
