import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
box-sizing: border-box;
font-family: 'Inter', sans-serif;
}

*, ::after, ::before {
box-sizing: inherit;
}

body {
background-color: ${(props) => props.theme.color.body};
}

`;
