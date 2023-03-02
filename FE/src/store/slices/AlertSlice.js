import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  show: false,
  type: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    SET_TEXT: (state, action) => {
      state.text = action.payload;
    },
    SET_SHOW: (state, action) => {
      state.show = action.payload;
    },
    SET_TYPE: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { SET_TEXT, SET_SHOW, SET_TYPE } = alertSlice.actions;

export default alertSlice.reducer;
