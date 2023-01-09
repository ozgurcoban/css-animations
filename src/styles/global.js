import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .App {
  display: grid;
  place-items: center;
  }

  a {
  text-decoration: none;
  color: #272727;
  margin: 0.5rem;
}

p {
  margin-top: 2rem;
  text-decoration: underline;
  font-size: 1.1rem;
}
`;

export default GlobalStyle;
