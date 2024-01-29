import styled from "styled-components";

export const Container = styled.div`
    animation-name: show-detail;
    animation-duration: 0.3s;
    max-width: 500px;
    width: 100%;

    
    right: 0;
    z-index: 3;
        
    background-color: ${({theme})=> theme.colors.bgCol};
    box-shadow: 0px 0px 20px 10px #00000025;

    .loading-container {
        position: absolute;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({theme})=> theme.colors.text};
        background-color: ${({theme})=> theme.colors.text}33;
        border-radius: 12px;

        margin-top: 150px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;

        animation-name: show-loading;
        animation-duration: 0.1s;
    }

    .loading-container-item {
        margin: 5px;
    }

    .loading-container span {
        text-align: center;
        font-size: 19px;
        font-weight: 500;

    }

    .loading-animation {
        width: 50px;
        height: 50px;

    }

    .info-container {
        position: sticky;
        top: 55px;
        overflow: auto;
        height: calc(100vh - 55px);
        display: flex;
        flex-direction: column;
    }

    .info-ul {
        padding: 15px;
        text-align: center;
        margin: auto;
        color: ${({theme})=> theme.colors.text};
    }

    .info-ul li {
        margin: 15px;
    }

    .close-btn {
        flex-shrink: 0;
        font-size: 20px;
        font-weight: 700;
        width: 60px;
        height: 60px;
        border-radius: 50px;
        margin: auto;
        margin-bottom: 45px;
        border: none;
        /* border-radius: 10px; */
        background-color: ${({theme})=> theme.colors.accentPale};
        outline: 4px solid transparent;
        letter-spacing: 1px;
        box-shadow: 0px 0px 10px 5px #00000077;
        padding: 5px;
    }

    .close-btn-icon {
        width: 100%;
        height: 100%;
    }

    .close-btn:hover {
        background-color: ${({theme})=> theme.colors.accentPale}d1;
    }

    .close-btn:active {
        outline: 2px solid ${({theme})=> theme.colors.text};
    }

    .flag-img {
        border-radius: 10px;
        box-shadow: 0px 0px 10px 5px #00000033;
    }

    .li-div {
        display: flex;
        flex-direction: column;
    }


    .li-div-ul li {
        margin: 0px;
    }

    .li-div-title-span {
        color: ${({theme})=> theme.colors.accentPale};
        font-weight: 700;
    }

    .detail-bottom {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        padding: 70px 0;

        background-image: url(${props => props.bgImg});
        
        background-size: cover;
        background-position: center;
        box-shadow: 0px 0px 15px 4px #00000044;
    }

    @keyframes show-detail {
        0% {
            transform: translateX(45px);
        }

        100% {
            
            transform: translateX(0px);
        }
    }

    @keyframes show-loading {
        0% {
            opacity: 0;
        }

        100% {
            
            opacity: 100;
        }
    }

    @media screen and (max-width: 680px) {
	    position: fixed;
        height: 100vh;

        
    } 

    @media screen and (max-width: 500px) {
        @keyframes show-detail {
            0% {
                opacity: 0;
                transform: translateY(45px);
            }

            100% {
                
                transform: translateY(0px);
            }
        }    
    } 

    
`