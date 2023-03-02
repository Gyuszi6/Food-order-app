import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    SET_LOGGED_IN: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { SET_LOGGED_IN } = authSlice.actions;

export default authSlice.reducer;
