import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
font-family: 'Inter', sans-serif;
  transition: background-color 0.3s;
  background-color: ${(props) => props.theme.color.body};
  letter-spacing: 0.05em;
  word-break: break-word;
}
`;
