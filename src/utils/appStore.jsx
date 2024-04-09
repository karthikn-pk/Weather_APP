import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherDataSlice";

const appStore = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default appStore;
