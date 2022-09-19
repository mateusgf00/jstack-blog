import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${props => props.theme.backGroundColor};
    color: ${props => props.theme.textColor};
    font-family: sans-serif;
  }
`;
