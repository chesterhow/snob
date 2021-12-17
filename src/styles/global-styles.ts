import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: ${(props) => props.theme.font.serif};
    font-size: 20px;

    @media (max-width: ${(props) => props.theme.breakPoints.md}) {
      font-size: 18px;
    }

    @media (max-width: ${(props) => props.theme.breakPoints.sm}) {
      font-size: 16px;
    }
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: ${(props) => props.theme.fontScale.xxxl};
    letter-spacing: -0.05em;

    @media (max-width: ${(props) => props.theme.breakPoints.md}) {
      font-size: ${(props) => props.theme.fontScale.xxl};
    }
  }

  h2 {
    font-size: ${(props) => props.theme.fontScale.xxl};
    letter-spacing: -0.05em;
  }

  h3 {
    font-size: ${(props) => props.theme.fontScale.xl};
    letter-spacing: -0.05em;
  }

  h4 {
    font-size: ${(props) => props.theme.fontScale.lg};
    letter-spacing: -0.05em;
  }

  h5 {
    font-size: ${(props) => props.theme.fontScale.md};
    letter-spacing: -0.05em;
  }
`;

export default GlobalStyle;
