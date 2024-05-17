import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getDetail } from "../store/slice/detailSlice";
import { getProduct } from "../store/slice/productSlice";
import { addCart } from "../store/slice/cartSlice";
import { useTranslation } from "react-i18next";

const Detail = () => {
  const { detailData } = useSelector((state) => state.detail);

  const { products } = useSelector((state) => state.product);
  
  const {t, i18n} = useTranslation()

  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, [params.id]);

  // console.log(detailData);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const addItem = (el) =>{
    dispatch(addCart(el))
  } 

  return (
    <div className="Details">
      <div className="detail-hero">
        <h1>{detailData?.category}</h1>
      </div>
      <div className="container">
        <div className="products-details">
          <div className="products-details-img">
            <div className="products-details-img-text">
              <h4>{detailData?.category}</h4>
            </div>
            <img src={detailData?.img} alt="" />
          </div>
          <div className="product-info">
            <h2>{detailData?.name}</h2>
            <h3>{t("Общий:")} {detailData?.price} $</h3>

            <p>{detailData?.descrtion1}</p>
            <p>{detailData?.descrtion2}</p>
            <div style={{display:"flex", gap:"20px"}}>

            <button style={{background:"#C01F93"}}>Wildberries</button>
            <button style={{background:"#2714FF"}} onClick={()=>addItem(detailData)}>{t("Добавить корзину")}</button>
            </div>
          </div>
        </div>

        <h1>{t("Похожие продукты")}</h1>
        <div className="AboutMain2-Card">
          {products?.slice(0, 4).map((el) => (
            <NavLink key={el.id} className={"NavLink"} to={`/detail/${el.id}`}>
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

export default Detail;
