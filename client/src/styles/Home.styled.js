import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.darkerBgCol};
    height: 100vh;

    .layout {
        display: flex;
        background-color: ${({theme}) => theme.colors.darkerBgCol};
    }

    .main {
        width: 100vw;
    }
    
`