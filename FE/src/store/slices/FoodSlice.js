import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foods: [],
  currentFoodId: 0,
  currentPrice: "",
  currentImage: "",
  currentName: "",
  currentType: "",
  currentDescription: "",
  changeFoodForm: false,
};

const foodSlice = createSlice({
  name: "food",
  initialState: initialState,
  reducers: {
    SET_FOODS: (state, action) => {
      state.foods = action.payload;
    },
    SET_CURRENT_FOOD_ID: (state, action) => {
      state.currentFoodId = action.payload;
    },
    SET_CURRENT_IMAGE: (state, action) => {
      state.currentImage = action.payload;
    },
    SET_CURRENT_NAME: (state, action) => {
      state.currentName = action.payload;
    },
    SET_CURRENT_PRICE: (state, action) => {
      state.currentPrice = action.payload;
    },
    SET_CURRENT_TYPE: (state, action) => {
      state.currentType = action.payload;
    },
    SET_CURRENT_DESCRIPTION: (state, action) => {
      state.currentDescription = action.payload;
    },
    SET_CHANGE_FOOD_FORM: (state, action) => {
      state.changeFoodForm = action.payload;
    },
  },
});

export const {
  SET_FOODS,
  SET_CURRENT_FOOD_ID,
  SET_CURRENT_DESCRIPTION,
  SET_CURRENT_IMAGE,
  SET_CURRENT_NAME,
  SET_CURRENT_PRICE,
  SET_CURRENT_TYPE,
  SET_CHANGE_FOOD_FORM,
} = foodSlice.actions;

export default foodSlice.reducer;
