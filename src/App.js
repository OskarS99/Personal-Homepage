import React from "react";
import { Header } from "./header";
import { GlobalStyle } from "./globalStyle";
import Container from "./Container";

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
  </Container>
);
export default App;
