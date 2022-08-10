import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    }

    body {
        height:100vh;
        background-color: #92afd4 ;
    } 
    
    #root {
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`