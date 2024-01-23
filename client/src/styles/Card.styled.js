import styled from "styled-components";

export const Container = styled.div`
    aspect-ratio: 16 / 9;
    width: 300px;
    margin: 10px;
    background-image: url(${(props)=> props.flagUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .info-container {
        height: 100%;
        width: 100%;
        background-color: #00000099;
        
    }

    img {
        width: 50px;
        border-radius: 7px;
    }
`