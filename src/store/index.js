import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/productSlice";
import detailSlice from "./slice/detailSlice";
import cartSlice from "./slice/cartSlice";
import authSlice from "./slice/authSlice";
import loginSlice from "./slice/loginSlice";








const store=configureStore({
  reducer:{
    product:productSlice,
    detail:detailSlice,
    cart:cartSlice,
    auth:authSlice,
    login:loginSlice
  }
})


export default store