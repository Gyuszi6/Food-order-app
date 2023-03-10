import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: localStorage.getItem("loggedin")
    ? JSON.stringify(localStorage.getItem("loggedin"))
    : false,
  isAdmin: false,
  currentEmail: localStorage.getItem("email")
    ? JSON.stringify(localStorage.getItem("email"))
    : "",
  name: "",
  postalCode: "",
  city: "",
  address: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    SET_LOGGED_IN: (state, action) => {
      state.loggedIn = action.payload;
      localStorage.setItem("loggedin", JSON.stringify(action.payload));
    },
    SET_ADMIN: (state, action) => {
      state.isAdmin = action.payload;
    },
    SET_CURRENT_EMAIL: (state, action) => {
      state.currentEmail = action.payload;
      localStorage.setItem("email", JSON.stringify(action.payload));
    },
    SET_NAME: (state, action) => {
      state.name = action.payload;
    },
    SET_POSTAL_CODE: (state, action) => {
      state.postalCode = action.payload;
    },
    SET_CITY: (state, action) => {
      state.city = action.payload;
    },
    SET_ADDRESS: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const {
  SET_LOGGED_IN,
  SET_ADMIN,
  SET_CURRENT_EMAIL,
  SET_POSTAL_CODE,
  SET_CITY,
  SET_ADDRESS,
  SET_NAME,
} = authSlice.actions;

export default authSlice.reducer;
