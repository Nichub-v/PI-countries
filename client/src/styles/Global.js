import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    a {
        text-decoration: none;
        color: white;
    }

    ul {
        list-style-type: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
    

    button, link {
        cursor: pointer;
    }

`

export default GlobalStyles;