import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    background-color: ${({theme})=> theme.colors.bgCol};
    top: 55px;

    right: 0;

    max-width: 500px;
    width: 100%;
    max-height: calc(100vh - 55px);
    height: 100%;

    animation-name: menu-show;
    animation-duration: 0.2s;
    justify-content: center;
    padding-top: 15px;
    transition: 0.2s;


.menu-theme-btn {
    position: absolute;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
    margin-bottom: 100px;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background-color: ${({theme})=> theme.colors.darkerBgCol}a9;
    color: ${({theme})=> theme.colors.text};
    padding-top: 3px;
}

.menu-theme-btn:hover {
    background-color: ${({theme})=> theme.colors.darkerBgCol};
    color: ${({theme})=> theme.colors.text};
}

.menu-ul {
    width: 100%;
}

.menu-li {
    text-align: center;
    font-size: 24px;
    transition: 0.2s;
    margin: 5px 0;
    width: 100%;
    
}

.menu-link {
    width: 75%;
    display: inline-block;
    transition: 0.2s;
    padding: 10px 0;
    border-radius: 10px;
}

.menu-link:hover {
    background-color: ${({theme})=> theme.colors.darkerBgCol};
    transition: 0.2s;
}

.li-separator {
    margin: auto;
    background-color: ${({theme})=> theme.colors.text};
    width: 80%;
    height: 1px;
    padding: 0;
}

.menu-li a {
    color: ${({theme})=> theme.colors.text};
}

    @keyframes menu-show {
        0% {
            opacity: 0;
            transform: translateX(100%);
        }

        100% {
            opacity: 100;
        }
    }
`