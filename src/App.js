import React from "react";
import { GlobalStyle } from "./globalStyle";

import { GitProjects } from "./GitProjects";
import { Contact } from "./Contact";
import { ThemeProvider } from "styled-components";
import { Person } from "./Person";
import { selectDarkTheme } from "./themeSlice";
import { Light, Dark } from "./theme";
import { useSelector } from "react-redux";
import { learn, skills } from "./Skills/skillsList";
import { Skills } from "./Skills";
import { Main } from "./Main";

const App = () => {
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={darkTheme.darkTheme ? Dark : Light}>
      <Main>
        <GlobalStyle />
        <Person />
        <Skills title="My skillset includes 🛠️" skills={skills} />
        <Skills title="What I want to learn next 🚀" skills={learn} />
        <GitProjects />
        <Contact />
      </Main>
    </ThemeProvider>
  );
};

export default App;
