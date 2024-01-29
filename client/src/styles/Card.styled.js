import styled from "styled-components";

export const Container = styled.div`

    width: 300px;
    height: 170px;
    margin: 10px;
    border-radius: 15px;
    overflow: hidden;
    padding: 2px;
    
    background-image: url(${(props)=> props.flagUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    animation-name: fade-in;
    animation-duration: 0.5s;

    .info-container {
        height: 100%;
        width: 100%;
        background-color: ${({theme})=> theme.colors.cardBg}90;
        border-radius: 14px;
        padding-top: 15px;
    }

    .info-ul {
        color: ${({theme})=> theme.colors.text};
        text-align: center;
        margin: auto;
        border-radius: 8px;
        max-width: 90%;
    }

    .weather-container {
        padding-top: 3px;
        border-radius: 9px;
        display: flex;
        position: absolute;
        margin-top: 115px;
        transform: translateX(-8px);
        align-items: center;
        justify-content: center;
        background-color: #00000066;
        backdrop-filter: blur(3px);
        color: #ffffff;
    }

    .weather-item {
        margin: 0 10px;
        height: 30px;
        display: flex;
        align-items: center;
    }

    .weather-span {
        display: inline;
        padding-bottom: 0px;
        max-width: 213px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        line-height: 1.5;
        vertical-align: middle;
    }

    img {
        width: 30px;
        padding-bottom: 3px;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 100;
        }
    }
`