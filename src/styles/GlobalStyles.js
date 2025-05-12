import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 @font-face {
  font-family: "Inter";
  src: url("./fonts/Inter-Regular.otf") format('opentype');
  font-weight: 400;
}

@font-face {
  font-family: "Inter";
  src: url("./fonts/Inter-Medium.otf") format('opentype');
  font-weight: 500;
}

@font-face {
  font-family: "Inter";
  src: url("./fonts/Inter-SemiBold.otf") format('opentype');
  font-weight: 600;
}
* {
    box-sizing: border-box;
}
    h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Inter", sans-serif;
}
  ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 96px;
    padding-right: 96px;
  }
`;
