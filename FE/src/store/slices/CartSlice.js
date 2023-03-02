import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    SET_CART: (state, action) => {
      const currentItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (currentItem >= 0) {
        state.cart[currentItem].cartQuantity++;
      } else {
        const Product = { ...action.payload, cartQuantity: 1 };
        state.cart.push(Product);
      }
      state.totalAmount++;
      state.totalPrice += action.payload.price;
    },
    INCREMENT_QUANTITY: (state, action) => {
      const id = action.payload.id;
      const index = state.cart.findIndex((item) => item.id === id);
      const currentItem = state.cart[index];
      currentItem.cartQuantity++;
      state.totalAmount++;
      state.totalPrice += currentItem.price;
    },
    DECREMENT_QUANTITY: (state, action) => {
      const id = action.payload.id;
      const index = state.cart.findIndex((item) => item.id === id);
      const currentItem = state.cart[index];
      if (currentItem.cartQuantity > 1) {
        currentItem.cartQuantity--;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
      state.totalAmount--;
      state.totalPrice -= currentItem.price;
    },
  },
});

export const { SET_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } =
  cartSlice.actions;

export default cartSlice.reducer;
