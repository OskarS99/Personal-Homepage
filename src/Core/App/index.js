import React from "react";
import { GlobalStyle } from "./globalStyle";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../Common/themeSlice";
import { PersonalHomepage } from "../../features/personalHomepage/PersonalHomepage/index";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Normalize />
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
