import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProduct } from "../store/slice/productSlice";

const SearchProduct = ({ setIsVisible }) => {
  const { products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const params = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    const filtered = products?.filter(
      (product) =>
        product.name.toLowerCase().includes(params.name.toLowerCase())
    );
    setFilteredProducts(filtered || []);
  }, [params.name, products]);

  useEffect(() => {
    setIsVisible(filteredProducts?.length > 0);
  }, [filteredProducts, setIsVisible]);

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <div>
              <h1 style={{ textAlign: "center", marginTop: "40px" }}>
          Результат поиска: {params.name}
        </h1>
      {filteredProducts?.length === 0 && (
        <h4 style={{ textAlign: "center", marginTop: "40px" }}>
          По данному запросу нет результатов.
        </h4>
      )}
      <div className="product-shop">
        <div className="ProductShop-Card">
          {filteredProducts?.map((el) => (
            <NavLink className={"NavLink"} key={el.id} to={`/detail/${el.id}`}>
              <div className="Card" key={el.id}>
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

export default SearchProduct;
