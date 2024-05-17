import React from "react";
import "./Main3.css";
import Otzyv from "../../assets/Star 3 (1).png";
import { useTranslation } from "react-i18next";
const Main3 = () => {
const {t, i18n} = useTranslation()

  return (
    <div className="Main3">
      <div className="container">
        <div className="Mian3-Content">
          <div>
            <h2>{t("Отзывы")}</h2>
            <h1>{t("Что говорят наши покупатели?")}</h1>
            <h6>
              <img
                id="Main3-img-1"
                src="https://s3-alpha-sig.figma.com/img/eaa1/a541/cfff2b3c1904b952d6abcf65e5d56e6f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kEk9Bjzcz79Cyv31akuii4Js0BgFL9iph1-BFE6CcaIZq2R~X1II89zOsikon1j8IAwrR6OaTH-hOg-wcij7t7VtX1CrU4ZPOVLcywh5qo2CEjuJNCZngjYDvpIE5M2OhRjNDHJcBKr0zykMIMapsVhCejNfJbeHccl1pGVPXkdfNJvGDDFmsI-krU2~w82Gg0qjNNZl2bAJ9q3p6QCxc4JwSuT3oDBkTnBT3rGBXPkylfsq4caTxVHQBsFnD4TVimaRicXvnb-xxLl8hFpIrMSqx5ItOP6V-oXY~26y3YjyzI91JDd3ecGl7EViZJaMHsDJhN8~2KdurMGgRnB4cA__"
                alt=""
              />
            </h6>

            <div className="Main3-Otzyv">
              <img src={Otzyv} alt="" />
              <img src={Otzyv} alt="" />
              <img src={Otzyv} alt="" />
              <img src={Otzyv} alt="" />
              <img src={Otzyv} alt="" />
            </div>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
          </div>
        </div>

        <div className="Main3-Counters">
          <div className="Main3-Counter-1">
            <div className="Main3-Counter-in">
              <div>
                <h3>100%</h3>
                <h4>{t("Органически")}</h4>
              </div>
            </div>
          </div>

          <div className="Main3-Counter-1">
            <div className="Main3-Counter-in">
              <div>
                <h3>15</h3>
                <h4>{t("Продуктов на рынке")}</h4>
              </div>
            </div>
          </div>

          <div className="Main3-Counter-1">
            <div className="Main3-Counter-in">
              <div>
                <h3>{t("150+")}</h3>
                <h4>{t("Торгорвых точек")}</h4>
              </div>
            </div>
          </div>

          <div className="Main3-Counter-1">
            <div className="Main3-Counter-in">
              <div>
                <h3>5+</h3>
                <h4>{t("Лет на рынке")}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
