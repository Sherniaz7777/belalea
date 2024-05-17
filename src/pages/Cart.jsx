import React from "react";
import { NavLink } from "react-router-dom";
import FooterTop from "../components/footer/FooterTop";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from "../store/slice/cartSlice";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { cartData } = useSelector((state) => state.cart);

  const {t, i18n} = useTranslation()

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeCart(id));
  };
  const plusCart = (id) => {
    dispatch(incrementQuantity({ id }));
  };
  const minusCart = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  const total=cartData.reduce((el, next)=>{
     return el + next.count * next.price;
   },0);



  return (
    <div className="Basket">
      <div className="container">
        <h1>{t("Корзинка")}</h1>
        <hr />
       {cartData.length === 0 ? <h2 style={{textAlign:"center"}}>{t("Пока ничего")}</h2> : "" }
        {cartData?.map((el) => (
          <div key={el.id} className="BasketProduct">
            <img src={el.img} alt="" />
            <h4>{el.name}</h4>
            <h3>{el.price}$</h3>
            <div className="QuantityAndButtons">
              <button onClick={() => minusCart(el.id)}>
                {el.count === 1 ? (
                  <i
                    class="bi bi-trash-fill"
                    onClick={() => handleRemoveFromCart(el.id)}
                  ></i>
                ) : (
                  "-"
                )}
              </button>
              <span>{el.count}</span>
              <button onClick={() => plusCart(el.id)}>+</button>
            </div>
            <h3>{el.price * el.count}$</h3>

            <button id="Delete" onClick={() => handleRemoveFromCart(el.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </button>
          </div>
        ))}
        <hr />

        <div className="OrderBtn">
          <NavLink to={"/order"}>
            <button>{t("Оформить Заказ")}</button>
          </NavLink>

          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <h4>{t("Общий:")}</h4>
            <h5>{total} $</h5>
          </div>
        </div>
        <FooterTop />
      </div>
    </div>
  );
};

export default Cart;
