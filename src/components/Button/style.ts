import styled, { css } from 'styled-components';

export type colorButon = 'primary' | 'secondary';

interface IStyledButton {
    color: colorButon;
}

export const StyledButton = styled.button<IStyledButton>`
    border: 0;
    border-radius: 5px;
    padding: 12px 24px;
    font-size: 14px;
    cursor: pointer;

    ${(props) => {
        if(props.color === 'primary'){
            return css`
                background-color: #ffffff;
                color: #242424;
            `
        }

        if(props.color === 'secondary'){
            return css`
                background-color: #7D00FF;
                color: #ffffff;
            `
        }
    }}

`;
