import React from "react";
import { Header } from "./header";
import { GlobalStyle } from "./globalStyle";
import Container from "./Container";
import { Skillset } from "./Skillset";
import { Learn } from "./Learn";
import { GitProjects } from "./GitProjects";
import { Contact } from "./Contact";

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Skillset />
    <Learn />
    <GitProjects />
    <Contact />
  </Container>
);
export default App;
