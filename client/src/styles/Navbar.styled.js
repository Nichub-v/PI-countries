import styled from "styled-components";

export const Container = styled.header`
    height: 55px;
    background-color: ${({theme})=> theme.colors.bgCol};
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 10;
    justify-content: space-around;
    align-items: center;

    .add-activity-link {
        font-weight: 600;
        font-size: 19px;
    }

    @media screen and (max-width: 680px) {
	    .title {
            display: none;
        }

        .add-activity-link {
            display: none;
        }
    } 
`