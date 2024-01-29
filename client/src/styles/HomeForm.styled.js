import styled from "styled-components";

export const Container = styled.div`
    max-width: 500px;
    width: 100%;

    
    right: 0;
    z-index: 3;
        
    background-color: ${({theme})=> theme.colors.bgCol};
    box-shadow: 0px 0px 20px 10px #00000025;
    
    animation-name: show-form;
    animation-duration: 0.2s;
    color: ${({theme})=> theme.colors.text};
    transition: 0.2s;

    * {
        transition: 0.2s;
    }

    .form p {
        color: ${({theme})=> theme.colors.text};
        transform: translateY(-15px);
    }

    .form-container {
        position: sticky;
        top: 55px;
        overflow: auto;
        height: calc(100vh - 55px);
        display: flex;
        flex-direction: column;
    }

    .form-title {
        font-size: 30px;

        text-align: center;
        padding: 15px;
        background-color: ${({theme})=> theme.colors.lighterBgCol};
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form label {
        text-align: center;
    }

    .label-title {
        
    }

    .form-item {
        margin: 15px 0;
        background-color: chocolate;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        width: 300px;

        overflow: hidden;
        background-color: ${({theme})=> theme.colors.darkerBgCol};
        border: 1px solid ${({theme})=> theme.colors.text};
    }

    .radio-field {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 10px 0;
    }

    input[type="radio"] {
        margin: 5px;
        width: 17px;
        height: 17px;
    }

    input[type="checkbox"] {
        margin: 7px;
        width: 17px;
        height: 17px;
    }

    .icon-input-container {
        display: flex;
        color: ${({theme})=> theme.colors.darkerBgCol};
        width: 300px;
    }

    .input-svg {
        background-color: ${({theme})=> theme.colors.darkerBgCol};
        color: ${({theme})=> theme.colors.text};
        height: 35px;
        width: 35px;
        padding: 5px; 
        border-right: 1px solid ${({theme})=> theme.colors.text};;
    }

    .title-svg {
        background-color: ${({theme})=> theme.colors.text};
        color: ${({theme})=> theme.colors.bgCol};
        height: 35px;
        width: 35px;
        padding: 5px; 
    }

    .label-title {
        background-color: ${({theme})=> theme.colors.text};
        color: ${({theme})=> theme.colors.bgCol};
    }

    .icon-input-container input {
        background-color: ${({theme})=> theme.colors.darkerBgCol};
        color: ${({theme})=> theme.colors.text};
        border: none;
        outline: none;
        height: 35px;
        font-size: 17px;
        width: 100%;
        padding: 0 10px;
        
    }

    .icon-text-container {
        color: ${({theme})=> theme.colors.darkerBgCol};
        background-color: ${({theme})=> theme.colors.text};
        display: flex;
        height: 35px;
        font-size: 17px;
        line-height: 2.0;
        vertical-align: middle;
        width: 300px;
        justify-content: center;
    }

    .submit-btn-container {
        background: url(${(props) => props.bgUrl});
        height: 300px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        background-size: cover;
        background-position: center;
        box-shadow: 0px 0px 15px 4px #00000044;
    }

    .submit-btn-container a {
        position: absolute;
        color: ${({theme})=> theme.colors.text};
        background-color: ${({theme})=> theme.colors.darkerBgCol}99;
        font-size: 17px;
        padding: 5px 10px;
        border-radius: 7px;
        margin-top: 60px;
    }

    .submit-btn {
        background-color: ${({theme})=> theme.colors.text};
        color: ${({theme})=> theme.colors.darkerBgCol};
        border: none;
        outline: none;
        height: 45px;
        font-size: 19px;
        width: 45%;
        margin-bottom: 100px;
        border-radius: 15px;

        box-shadow: 0px 0px 15px 7px #00000077;
    }

    .grayed-out {
        background-color: #cccccc;
        color: #aaaaaa;
        cursor: not-allowed;
    }

    .country-btn {
        width: 100%;
        background-color: transparent;
        border: none;
        padding: 5px;
        font-size: 14px;
        color: ${({theme})=> theme.colors.text};
        padding-right: 25px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
    }

    .form li {
        display: flex;
        align-items: center;
        padding: 0 5px;

        background-color: ${({theme})=> theme.colors.lighterBgCol};
        color: ${({theme})=> theme.colors.text};
        border: none;
        border-radius: 12px;
        
        width: 100%;
        margin: 5px 0;
        height: 25px;
    }

    .form ul {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }

    .countries-icon {
        color: ${({theme})=> theme.colors.text};
        height: 25px;
        width: 25px;

    }

    @keyframes show-form {
        0% {
            transform: translateX(45px);
        }

        100% {
            
            transform: translateX(0px);
        }
    }

    @media screen and (max-width: 680px) {
	    position: fixed;
        height: 100vh;
    } 
`