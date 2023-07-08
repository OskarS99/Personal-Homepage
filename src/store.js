import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    darkTheme: darkThemeReducer,
  },
});

export default store;
