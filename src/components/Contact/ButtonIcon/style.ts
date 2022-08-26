import styled, { css } from 'styled-components';

interface IStyledButtonIcon {
    color?: string;
}

export const StyledButtonIcon = styled.div<IStyledButtonIcon>`
    max-width: 15%;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #DFE3EB;

    svg{
        fill: black;
    }

    ${props => {
        if(props.color){
            return css`
                background-color: #7D00FF;
                border: 0;

                svg{
                    fill: white;
                }

            `
        }
    }}

    @media screen and (max-width: 768px){
        width: 50px;
        height: 50px;
    }

`;
