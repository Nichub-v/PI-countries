import styled from "styled-components";

export const Container = styled.div`
    height: calc(100% - 10px);
    max-width: 470px;
    width: 100%;

    .hide {
        opacity: 0;
        animation-name: hide;
        animation-duration: 0.2s;
    }

    .show {
        opacity: 100;
        animation-name: show;
        animation-duration: 0.2s;
    }

    .showIcon {
        transition: 0.2s;
        opacity: 100;
    }

    .hideIcon {
        transition: 0.2s;
        opacity: 0;
    }

    .results-container {
        background-color: ${({theme}) => theme.colors.darkerBgCol};
        
        margin-top: 5px;
        width: 100%;
        
        border-radius: 15px;
        overflow: auto;
        max-height: calc(100vh - 55px); /* 55 px es el tamaño del componente Navbar */
        padding: 7px 0;
        
    }

    .result-li {
        display: flex;
        justify-content: center;
        justify-items: center;
        height: 55px;
    }

    .result-img {
        max-width: 70px;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    .result-span-container {
        display: flex;
        align-items: center;
        overflow: hidden;

        margin-right: 5px;
        
        height: 100%;
        width: 100%;
    }

    .result-span {
        display: block;   
        font-size: 19px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .result-link {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 7px 15px;
    }

    .result-link:hover {
        transition: 0.2s;
        background-color: ${({theme}) => theme.colors.lighterBgCol}
    }

    .search-bar {
        width: 100%;
        height: 100%;
        display: flex;
        border-radius: 27px;
        overflow: hidden;
    }

    .search-bar input {
        border: none;
        outline: none;
        border: none;
    }

    .input {
        width: 100%;
        padding: 0 15px;
        color: ${({theme}) => theme.colors.text};
        background-color: ${({theme}) => theme.colors.darkerBgCol};

        font-weight: 100;
        font-size: 17px;
        font-weight: 500;
    }

    .icon-container {
        max-width: 50px;
        width: 100%;
        padding: 12px;

        color: ${({theme}) => theme.colors.text};
        background-color: ${({theme}) => theme.colors.darkerBgCol};
    }

    .icon {
        width: 100%;
        height: 100%;
    }

    @keyframes show {
        0% {
            transform: translateY(-15px);
            opacity: 0%;
        }

        100% {
            opacity: 100%;
        }
    }

    @keyframes hide {
        0% {
            opacity: 100%;
        }

        100% {
            opacity: 0%;
            transform: translateY(-15px);
        }
    }

    @media screen and (max-width: 470px) {
	    .results-container {
            border-radius: 0;
        }

        .search-bar {
            width: calc(100% - 20px);
            margin: 0 10px;
        }
    } 
`