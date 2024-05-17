import React from "react";
import "../footer/Footer.css";
import logotip from "../../assets/Logo (1).png";
import vector from "../../assets/Vector (4).png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t, i18n} = useTranslation()
  return (
    <div className="container">
      <footer>
        <div className="footer-1">
          <div className="footer-1-in">
            <h2>Contact Us</h2>
            <div className="footer-email-1">
              <h4>Email</h4>
              <p>needhelp@Organia.com</p>
            </div>
            <div className="footer-phone-1">
              <h4>Phone</h4>
              <p>666 888 888</p>
            </div>
            <div className="footer-adrs-1">
              <h4>Address</h4>
              <p>88 road, borklyn street, USA</p>
            </div>
          </div>
            <div className="footer-Line"></div>
        </div>
        <div className="footer-2">
          <div>
            <img src={logotip} alt="" />
            <br />
            <p>
              {t("Следите за новостями и акциями в наших социальных сетях, подпишитесь!")}
              
            </p>
            <br />
            <div className="logotip-social">
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
        <div className="footer-3">
          <div className="footer-Line"></div>
          <div>
            <h2>Utility Pages</h2>
            <p>Style Guide</p>
            <p>404 Not Found</p>
            <p>Password Protected</p>
            <p>Licences</p>
            <p>Changelog</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
