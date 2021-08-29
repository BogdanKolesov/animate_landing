import { createGlobalStyle } from 'styled-components';

export const GlobalTheme = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat','Roboto', sans-serif;
    }

    html, body{
        overflow-x: hidden;
    }
`