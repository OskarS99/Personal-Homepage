import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: true,
  },
  reducers: {
    themeToggler: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { themeToggler } = themeSlice.actions;

export const selectTheme = (state) => state.theme;

export default themeSlice.reducer;
