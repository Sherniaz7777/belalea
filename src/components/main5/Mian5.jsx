import React from "react";
import "./Main5.css";
import { useTranslation } from "react-i18next";

const Mian5 = () => {
  const {t, i18n} = useTranslation()
  return (
    <div className="Main5">
      <div className="container">
        <div className="Main5-hero">
          <div className="Main5-imgs"></div>
          <div className="Main5-Content-all">
            <div className="Main5-Content">
              <h2>Eco Friendly</h2>
              <h1>{t("Создаём здоровое будущее")}</h1>

              <div className="Main5-Points-1">
                <h4>{t("Современное сельское хозяйство")}</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div className="Main5-Points-1">
                <h4>{t("Технологичный подход в производстве")}</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
              <div className="Main5-Points-1">
                <h4>{t("Популяризация натуральных продуктов")}</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremque laudantium. Sed ut perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mian5;
