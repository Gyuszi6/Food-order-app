import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: ["bowl", "hamburger", "pizza", "other"],
  minPrice: "",
  maxPrice: "",
  currentActive: "0",
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
      state.type = ["bowl", "hamburger", "pizza", "other"];
    },
    SET_MIN_PRICE: (state, action) => {
      state.minPrice = action.payload;
    },
    SET_MAX_PRICE: (state, action) => {
      state.maxPrice = action.payload;
    },
    SET_CURRENT_ACTIVE: (state, action) => {
      state.currentActive = action.payload;
    },
  },
});

export const {
  SET_TYPE,
  SET_DELETE_TYPE,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  SET_CURRENT_ACTIVE,
} = typeSlice.actions;

export default typeSlice.reducer;
