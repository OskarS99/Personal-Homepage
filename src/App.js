import React from "react";
import { GlobalStyle } from "./globalStyle";
import Container from "./Container";
import { Skillset } from "./Skillset";
import { Learn } from "./Learn";
import { GitProjects } from "./GitProjects";
import { Contact } from "./Contact";
import { ThemeProvider } from "styled-components";
import { Person } from "./Person";
import { selectTheme } from "./themeSlice";
import { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme.theme ? lightTheme : darkTheme}>
      <Container>
        <GlobalStyle />
        <Person />
        <Skillset />
        <Learn />
        <GitProjects />
        <Contact />
      </Container>
    </ThemeProvider>
  );
};

export default App;
