import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foods: [],
};

const foodSlice = createSlice({
  name: "food",
  initialState: initialState,
  reducers: {
    SET_FOODS: (state, action) => {
      state.foods = action.payload;
    },
  },
});

export const { SET_FOODS } = foodSlice.actions;

export default foodSlice.reducer;
