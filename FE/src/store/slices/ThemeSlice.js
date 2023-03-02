import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("actualTheme")
    ? localStorage.getItem("actualTheme")
    : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    SET_THEME: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("actualTheme", state.theme);
    },
  },
});

export const { SET_THEME } = themeSlice.actions;

export default themeSlice.reducer;
