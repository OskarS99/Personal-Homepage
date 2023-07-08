import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "darkTheme",
  initialState: {
    darkTheme: false,
  },
  reducers: {
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleDarkTheme } = themeSlice.actions;

export const selectDarkTheme = (state) => state.darkTheme;

export default themeSlice.reducer;
