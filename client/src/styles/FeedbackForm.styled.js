import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    background-color: ${({theme}) => theme.colors.bgCol};
    position: fixed;
    z-index: 4;

    animation-name: slide;
    animation-duration: 0.4s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    display: flex;
    justify-content: center;


    color: ${({theme}) => theme.colors.text};

    .form-container {
        position: sticky;
        top: 55px;
        overflow: auto;
        height: calc(100vh - 55px);
        display: flex;
        flex-direction: column;
        width: 600px;
        padding: 15px;
    }

    .title {
        text-align: center;
        
        font-size: 45px;
    }

    .form {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        justify-content: center;
    }

    a {
        color: ${({theme})=> theme.colors.text};
    }

    .form-item {
        margin: 15px 0;
        background-color: chocolate;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        width: 100%;

        overflow: hidden;
        background-color: ${({theme})=> theme.colors.darkerBgCol};
        border: 1px solid ${({theme})=> theme.colors.text};
    }

    .label-title {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({theme})=> theme.colors.text};
        color: ${({theme})=> theme.colors.bgCol};
        height: 30px;
    }

    .form-item input, .form-item textarea {
        display: flex;
        color: ${({theme})=> theme.colors.text};
        width: 100%;
        height: 45px;
        border: none;
        outline: none;
        background-color: ${({theme})=> theme.colors.darkerBgCol};
        padding: 5px 10px;
        font-size: 17px;
    }

    .form-item textarea {
        height: 300px;
        font-family: sans-serif;
        padding-bottom: 20px;
        resize: none;
    }

    .textarea-length { 
        transform: translateY(-20px);
    }

    .submit-btn {
        background-color: ${({theme})=> theme.colors.text};
        color: ${({theme})=> theme.colors.darkerBgCol};
        border: none;
        outline: none;
        height: 45px;
        font-size: 19px;
        width: 45%;
       
        border-radius: 15px;
        margin: auto;
        margin-top: 50px;
        margin-bottom: 55px;
    }

    .error-text {
        color: ${({theme})=> theme.colors.text};
        transform: translateY(-15px);
    }

    .form label {
        font-size: 19px;
        text-align: center;

    }

    .grayed-out {
        background-color: #cccccc;
        color: #aaaaaa;
        cursor: not-allowed;
    }
    

    @keyframes slide {
        0% {
            opacity: 0;
            transform: translateY(50vh);
            
        }

        100% {
            opacity: 100;
        }
    }
`