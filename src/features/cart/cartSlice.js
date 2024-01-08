import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
  itemscounter: 0,
  total: 0,
  checkout: false,
};

const shopCartSlice = createSlice({
  name: "shopcart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.itemscounter = state.items.reduce(
        (total, product) => total + product.quantity,
        0
      );
      state.total = state.items.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ).toFixed(2);
    },
    removeItem: (state, action) => {
      let newIt = state.items.filter((item) => item.id !== action.payload.id);
      state.items = [...newIt];
      state.itemscounter = state.items.reduce(
        (total, product) => total + product.quantity,
        0
      );
      state.total = state.items.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ).toFixed(2);
    },
    increase: (state, action) => {
      const itemI = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[itemI].quantity++;
      state.itemscounter = state.items.reduce(
        (total, product) => total + product.quantity,
        0
      );
      state.total = state.items.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ).toFixed(2);
    },
    decrease: (state, action) => {
      const itemD = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items[itemD].quantity--;
      state.itemscounter = state.items.reduce(
        (total, product) => total + product.quantity,
        0
      );
      state.total = state.items.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ).toFixed(2);
    },
    clear: (state) => {
      state.items = [];
      state.total = 0;
      state.itemscounter = 0;
      state.checkout = false;
    },
    checkout: (state) => {
      state.items = [];
      state.total = 0;
      state.itemscounter = 0;
      state.checkout = true;
    },
  },
});
export const { addItem, removeItem, increase, decrease, clear ,checkout} =
  shopCartSlice.actions;
export default shopCartSlice.reducer;
