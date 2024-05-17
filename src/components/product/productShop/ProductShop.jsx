import React, { useEffect } from "react";
import "./ProductShop.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../store/slice/productSlice";
import { NavLink } from "react-router-dom";

const ProductShop = () => {
  const { products } = useSelector((state) => state.product);


  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div className="product-shop">
      <div className="ProductShop-Card">
        {products?.map((el) => (
          <NavLink className={'NavLink'} key={el.id} to={`/detail/${el.id}`}>
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
  );
};

export default ProductShop;
