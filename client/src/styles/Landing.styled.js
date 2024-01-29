import styled from "styled-components";

export const Container = styled.div`
    .bgDiv {
        background-image: url(${(props) => props.bgImg});
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: -1;
        background-position: top;
        background-size: cover;
    }

    .header {
        width: 100%;
        height: 150px;
        margin-bottom: 90px;
    }

    .text-container {
        margin-left: 50px;
    }
    
    .title {
        font-size: 65px;
        animation-name: slide;
        animation-duration: 1s;
    }

    .subtitle {
        max-width: 230px;
        text-align: left;
        font-size: 25px;

        animation-fill-mode: backwards;
        animation-delay: 0.3s;
        animation-name: slide;
        animation-duration: 1s;
    }

    .button {
        width: 200px;
        font-size: 30px;
        padding: 5px 0;

        border-radius: 8px;
        border: none;

        margin: 50px 0;
        letter-spacing: 1px;
        transition: 0.2s;

        animation-fill-mode: backwards;
        animation-delay: 0.6s;
        animation-name: slide;
        animation-duration: 1s;
    }

    .button:hover {
        transition: 0.2s;
        background-color: #999999;
        

    }
    
    .footer {
        margin-top: 200px;
        height: 300px;
        width: 100%;
        background-color: #00000055;
        padding: 0 10px;
        padding-top: 20px;
    }

    .copyright {
        font-size: 17px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .copyright-handle {
        transform: translateY(-10px);
    }

    .camera-icon {
        width: 20px;
        height: 20px;
        margin: 0 5px;
    }

    .footer-info {
        margin-top: 100px;
    }

    .contact-container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 50px;
        align-items: center;
    }

    .contact-container a {
        margin: 7px;
    }
    

    .contact-container div {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: white;
        margin: 5px;
    }

    @keyframes slide {
     0% {
        opacity: 0;
        transform: translateX(-500px);
     }

     100% {

     }
    }

`