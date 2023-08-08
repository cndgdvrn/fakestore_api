import { createSlice } from "@reduxjs/toolkit";
import { calculateCost } from "../../helpers/calculateCost";
import { calculateQuantity } from "../../helpers/calculateQuantity";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find((product) => {
        return product.id === action.payload.id;
      });
      if (!existingProduct) {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      if (existingProduct) {
        const afterAddtoCart = state.cart.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        state.cart = [...afterAddtoCart];
      }
      state.totalPrice = calculateCost(state.cart)
      state.totalQuantity = calculateQuantity(state.cart)
    },
    increase: (state, action) => {
      const afterInc = state.cart.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      state.cart = [...afterInc];
      state.totalPrice = calculateCost(state.cart)
      state.totalQuantity = calculateQuantity(state.cart)
      
    },
    remove: (state, action) => {
      const afterRemove = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      state.cart = [...afterRemove];
      state.totalPrice = calculateCost(state.cart)
      state.totalQuantity = calculateQuantity(state.cart)
    },
    decrease: (state, action) => {
      const afterDec = state.cart.map((product) =>
        product.id === action.payload.id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      state.cart = [...afterDec];
      state.totalPrice = calculateCost(state.cart)
      state.totalQuantity = calculateQuantity(state.cart)
     
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, increase, decrease, remove } = cartSlice.actions;
