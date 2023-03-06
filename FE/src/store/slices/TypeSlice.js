import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: ["gyros", "hamburger", "pizza"],
  minPrice: "",
  maxPrice: "",
};

const typeSlice = createSlice({
  name: "type",
  initialState: initialState,
  reducers: {
    SET_TYPE: (state, action) => {
      state.type = [];
      state.type.push(action.payload);
    },
    SET_DELETE_TYPE: (state, action) => {
      state.type = ["gyros", "hamburger", "pizza"];
    },
    SET_MIN_PRICE: (state, action) => {
      state.minPrice = action.payload;
    },
    SET_MAX_PRICE: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const { SET_TYPE, SET_DELETE_TYPE, SET_MIN_PRICE, SET_MAX_PRICE } =
  typeSlice.actions;

export default typeSlice.reducer;
