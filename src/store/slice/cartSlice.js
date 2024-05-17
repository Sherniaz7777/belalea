import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, { payload }) {
      let hasIncart = state.cartData.find((item) => item.id === payload.id);
      if (hasIncart) {
        hasIncart.count += 1;
      } else {
        const newItem = {
          ...payload,
          count: 1,
        };
        state.cartData.push(newItem);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartData));
    },
    removeCart(state, action) {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      
      localStorage.setItem("cart", JSON.stringify(state.cartData));
    },
    incrementQuantity(state, action) {
      const idToUpdate = action.payload.id;
      const itemToUpdate = state.cartData.find((item) => item.id === idToUpdate);
      if (itemToUpdate) {
        itemToUpdate.count++;
        localStorage.setItem("cart", JSON.stringify(state.cartData));
      }
    },
    decrementQuantity(state, action) {
      const idToUpdate = action.payload.id;
      const itemToUpdate = state.cartData.find((item) => item.id === idToUpdate);
      if (itemToUpdate && itemToUpdate.count > 1) {
        itemToUpdate.count--;
        localStorage.setItem("cart", JSON.stringify(state.cartData));
      }
    },
  },
});

export const { addCart, removeCart, decrementQuantity, incrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
