import styled from "styled-components";

// MAIN
export const Container = styled.div`
    display: flex;
    
    flex-wrap: nowrap;
    width: 100%;
    background-color: ${({theme}) => theme.colors.darkerBgCol};
    justify-content: center;
    transition: 0.2s;
    
    
    .filters {
        position: fixed;
        display: flex;
        justify-content: center;
        padding: 10px;

        top: 55px;
        height: 55px;
        width: 100%;
        z-index: 1;
        background-color: ${({theme}) => theme.colors.bgCol};

        border-bottom: 1px solid ${({theme}) => theme.colors.lighterBgCol};
        transition: 0.2s;
        
    }

    .filters select {
        margin: 0 5px;
        border: 1px solid ${({theme}) => theme.colors.accentPale};
        background-color: ${({theme}) => theme.colors.lighterBgCol};
        color: ${({theme}) => theme.colors.text};
        padding: 5px;
        border-radius: 17px;
        transition: .2s;
    }

    .filters option {       
        margin: 0 5px;
        border: 2px solid ${({theme}) => theme.colors.accentPale};
        padding: 5px;
        border-radius: 17px;
    }

    .cards-container {
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        margin-top: calc(55px);
        margin-bottom: calc(50px);
        padding: 15px;

        max-width: 1200px;
        min-height: calc(100vh - 55px - 50px - 55px);
        justify-content: space-around;
        align-content: space-around;

        border-left: 1px solid ${({theme}) => theme.colors.lighterBgCol};
        border-right: 1px solid ${({theme}) => theme.colors.lighterBgCol};
        transition: .2s;
        
    }

    .cards-container p {
        margin: 0 100px;
        font-size: 17px;
        color: ${({theme}) => theme.colors.text};
        transition: 0.2s;
    }

    .pages-container {
        border-top: 1px solid ${({theme}) => theme.colors.lighterBgCol};
        height: 50px;
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 1;
        background-color: ${({theme}) => theme.colors.bgCol};
        display: flex;
        
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 0px 15px;
        transition: 0.2s;
    }

    .page-buttons-container {
        display: grid;
        grid-auto-flow: column;

        overflow: auto;
        max-width: 850px;
        align-items: center;
    }

    .pages-container button {
        border: none;
        outline: none;
        border-radius: 2px;
        margin: 2px;
    
        background-color: ${({theme}) => theme.colors.lighterBgCol};
        color: ${({theme}) => theme.colors.text};
        font-size: 15px;
        font-weight: 500;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 30px;
        height: 30px;
        flex-shrink: 0;

        transition: .2s;
    }

    .page-indicator {
        transition: 0.2s;
        position: absolute;
        bottom: 55px;
        background-color: ${({theme}) => theme.colors.lighterBgCol};
        color: ${({theme}) => theme.colors.text};
        padding: 3px;
        border-radius: 5px;
    }
    
    @media screen and (max-width: 1200px) {
	    .cards-container {
            border: none;
        }
    }
`