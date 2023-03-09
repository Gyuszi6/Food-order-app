import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  currentOrder: [],
  currentName: "",
  currentAddress: "",
  currentTotalPrice: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    SET_ORDERS: (state, action) => {
      state.orders = action.payload;
    },
    SET_CURRENT_ORDER: (state, action) => {
      state.currentOrder = action.payload;
    },
    SET_CURRENT_NAME: (state, action) => {
      state.currentName = action.payload;
    },
    SET_CURRENT_ADDRESS: (state, action) => {
      state.currentAddress = action.payload;
    },
    SET_CURRENT_TOTAL_PRICE: (state, action) => {
      state.currentTotalPrice = action.payload;
    },
  },
});

export const {
  SET_ORDERS,
  SET_CURRENT_ORDER,
  SET_CURRENT_NAME,
  SET_CURRENT_ADDRESS,
  SET_CURRENT_TOTAL_PRICE,
} = orderSlice.actions;

export default orderSlice.reducer;
