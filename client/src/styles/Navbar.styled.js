import styled from "styled-components";

export const Container = styled.header`
    height: 55px;
    background-color: ${({theme})=> theme.colors.bgCol};
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 10;
    transition: 0.2s;
    

    .nav-start {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;
    }
    .nav-middle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .nav-end {
        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 100%;
        height: 100%;
    }

    .nav-btn, .nav-btn-adaptive {
        height: 45px;

        padding: 5px;
        color: ${({theme})=> theme.colors.text};
        background-color: ${({theme})=> theme.colors.bgCol};
        border: none;
        border-radius: 10px;
        margin: 0 5px;

        transition: 0.2s;
    }

    .nav-btn-adaptive {
        display: none
    }

    .nav-btn:hover {
        background-color: ${({theme})=> theme.colors.darkerBgCol}99;
        
        transition: 0.2s;
    }

    .active-menu:hover {
        background-color: ${({theme})=> theme.colors.darkerBgCol};
        
        transition: 0.2s;
    }

    .nav-text {
        display: flex;
        font-size: 25px;
        margin: 0 15px;
        padding-bottom: 3px;
    }
    
    .menu-icon {
        display: none;
    }

    .theme-icon {
        width: 100%;
        height: 100%;
    }

    .theme-btn {
        width: 45px;
        height: 45px;
    }

    .theme-button-li {
        display: none;
    }

    .active-menu {
        background-color: ${({theme})=> theme.colors.darkerBgCol};
        
        transition: 0.2s;
    }

    .icon {
        width: 100%;
        height: 100%;
    }

    .title-icon {
        display: none;
        height: 45px;
        width: 45px;
        padding: 5px;
    }

    .title {
        color: ${({theme})=> theme.colors.text};
        font-size: 35px;
        margin-bottom: 5px;
    }

    .active button {
        background-color: ${({theme})=> theme.colors.darkerBgCol};
    }

    @media screen and (max-width: 1060px) {
        .menu-container {
            display: initial;
        }

        .theme-btn {
            display: none;
        }

	    .nav-end {
            width: 45px;
            margin: 0 10px;
        }

        .nav-start {
            width: 45px;
            margin: 0 10px;
        }

        .nav-text {
            display: none;
        }

        .nav-btn {
            display: none;
        }

        .nav-btn-adaptive {
            width: 45px;
            margin: 0;
            display: initial;
        }

        .menu-icon {
            display: initial;
            width: 100%;
            height: 100%;
        }

        .theme-button-li {
            display: initial;
        }

        .title {
            display: none;
        }

        .title-icon {
            display: initial;
        }
    }
`