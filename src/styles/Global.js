import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
//@ import fonts come here

* {
    box-sizing:border-box;
}

body {
    font-size:1.15rem;
    /* overflow-x: hidden; */
    /* scroll-effect */
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scrollbar-width: none;
    scroll-behavior: smooth;
    /* margin:0; */
}
`
