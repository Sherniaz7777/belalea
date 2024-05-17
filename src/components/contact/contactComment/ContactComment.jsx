import React from "react";
import "./ContactComment.css";
import { useTranslation } from "react-i18next";

const ContactComment = () => {

  const {t, i18n} = useTranslation()

  return (
    <div className="contact-comment">
      <div className="container">
        <div className="contact-comment-in">
          <form>
            <div className="Contact-inputs">
              <div>
                <label>{t("Как вас зовут?*")}</label>
                <br />
                <input type="text" placeholder="Ирина, Денис, Елена" />
                <br />

                <label>{t("Компания")}</label>
                <br />
                <input type="text" placeholder={t("Название вашей компании")} />
              </div>
              <div>
                <label>{t("Ваша почта*")}</label>
                <br />
                <input
                  type="text"
                  placeholder="example@yourmail.com"
                  typeof="email"
                />
                <br />

                <label>{t("Тема обращения*")}</label>
                <br />
                <input
                  type="text"
                  placeholder={t("Напишите ваше предложение или вопрос")}
                />
              </div>
            </div>
            <br />
            <label>{t("Сообщение")}</label>
            <br />
            <textarea placeholder={t("Не забудьте поздороваться :")}></textarea>
            <br />
            <button>{t("Отправить")}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComment;
