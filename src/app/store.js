import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import shopReducer from "../features/cart/cartSlice"
const store = configureStore({
  reducer: {
    products: productsReducer,
    shopcart:shopReducer
  },
});
export default store;
