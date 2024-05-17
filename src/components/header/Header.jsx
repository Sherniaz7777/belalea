import React, { useEffect, useState } from "react";
import "../header/Header.css";
import logotip from "../../assets/Logo (1).png";
import { NavLink } from "react-router-dom";
import Basket from "../../assets/Basket.png";
import { useDispatch, useSelector } from "react-redux";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n/i18n";
import iconmenu from "../../assets/menu-vertical-svgrepo-com.svg";
import iconDel from "../../assets/x-symbol-svgrepo-com.svg";
import iconUser from "../../assets/user-icon-svgrepo-com.svg";
import { getUser, loginUser } from "../../store/slice/loginSlice";

const Header = ({ setIsvisible, isvisible }) => {
  const { cartData } = useSelector((state) => state.cart);
  const { accessToken } = useSelector((state) => state.login);
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState("ru");
  const { t, i18n } = useTranslation();
  const [isvisiinput, Setisvisiinput] = useState(false);
  const [isvisibtn, Setisvisibtn] = useState(false);
  const [isActivesign, SetActiveSign] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".searchs")) {
        Setisvisiinput(false);
      }
    };

    const handleClickOutsideBody = (event) => {
      if (!event.target.closest(".phone-number")) {
        SetActiveSign(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    document.body.addEventListener("click", handleClickOutsideBody);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
      document.body.removeEventListener("click", handleClickOutsideBody);
    };
  }, []);

  const handlAddSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      window.location.href = `/search/${searchQuery}`;
      setSearchQuery("");
    }
  };

  useEffect(() => {
    dispatch(loginUser());
  }, []);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const LogOut = () => {
    location.reload();
    localStorage.removeItem("Token");
  };
  if (accessToken) {
    setIsvisible(true);
  } else {
    setIsvisible(false);
  }

  const changeLanguage = (language) => {
    const lang = language.toLowerCase();
    i18n.changeLanguage(lang);
    setActive(lang);
  };

  return (
    <header>
      <div className="header-container">
        <nav>
          <div className="logotip-menu">
            <div className="logotip-header">
              <NavLink to={"/"}>
                <img src={logotip} alt="" />
              </NavLink>
            </div>
            <div className="menu-header">
              <NavLink to={"about"}>{t("О нас")}</NavLink>
              <NavLink to={"/product"}>КАТАЛОГ</NavLink>
              <NavLink to={"/blog"}>{t("Новости")}</NavLink>
              <NavLink to={"/contact"}>{t("Контакты")}</NavLink>
            
            </div>
          </div>
          <div className="search-contact">
            <form onSubmit={handlAddSearch}>
              <div className="searchs">
                {isvisiinput && (
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("Поиск продукта")}
                    style={{ position: "absolute" }}
                  />
                )}
                <div
                  className="search-icon"
                  onClick={() => {
                    Setisvisiinput(!isvisiinput);
                  }}
                >
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      outline: "none",
                    }}
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </form>
            <div className="Langugae">
              <button
                onClick={() => changeLanguage("RU")}
                className={active === "ru" ? "active" : ""}
              >
                RU
              </button>
              <button
                onClick={() => changeLanguage("KG")}
                className={active === "kg" ? "active" : ""}
              >
                KG
              </button>
            </div>
            <NavLink className={"NavLinkHeader"} to={"/cart"}>
              <img width={30} src={Basket} alt="" />
              <div className="basket-number">
                <span>{cartData.length}</span>
              </div>
            </NavLink>
            <NavLink to={'/signIn'}>
              {!isvisible && (
                <button
                  id="log"
                  style={{
                    padding: "6px",
                    fontSize: "18px",
                    fontWeight: "500",
                    borderRadius: "12px",
                    background: "none",
                    marginRight: "20px",
                    border: "1px solid rgb(76, 73, 73) ",
                  }}
                >
                  {t("Вход")}
                  
                </button>
              )}
            </NavLink>
            {isvisible && (
              <div
                className="phone-number"
                onClick={() => {
                  SetActiveSign(!isActivesign);
                }}
              >
                <div className="contact-user">
                  <img width={25} src={accessToken.avatar} alt="" />
                </div>
                <p>
                  <img
                    width={20}
                    src={isActivesign ? iconDel : iconmenu}
                    alt=""
                  />
                </p>
                <br />
                {isActivesign && (
                  <div id="Sign" onClick={(e) => e.stopPropagation()}>
                    <div>
                      {t("Имя")}
                      
                      <br />
                      {accessToken.name}
                    </div>

                    <div>
                      Email
                      <br />
                      {accessToken.email.length > 15
                      ? `${accessToken.email.slice(0, 15)}...`
                      : accessToken.email}
                    </div>

                    <button
                      onClick={() => {
                        LogOut();
                      }}
                    >
                      {t("Выйти")}
                      
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
