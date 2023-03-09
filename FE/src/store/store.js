import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/ThemeSlice";
import typeReducer from "./slices/TypeSlice";
import authReducer from "./slices/AuthSlice";
import AlertReducer from "./slices/AlertSlice";
import cartReducer from "./slices/CartSlice";
import foodReducer from "./slices/FoodSlice";
import orderReducer from "./slices/OrderSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    type: typeReducer,
    auth: authReducer,
    alert: AlertReducer,
    cart: cartReducer,
    food: foodReducer,
    order: orderReducer,
  },
});
