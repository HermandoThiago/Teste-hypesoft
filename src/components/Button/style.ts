import styled, { css } from 'styled-components';

export type colorButon = 'primary' | 'secondary';

export interface IStyledButton {
    color: colorButon;
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
    size?: string;
}

export const StyledButton = styled.button<IStyledButton>`
    margin-top: ${props => `${props.top}px`};
    margin-bottom: ${props => `${props.bottom}px`};
    margin-right: ${props => `${props.right}px`};
    margin-left: ${props => `${props.left}px`};
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

    ${(props) => {
        if(props.size === 'icon'){
            return css`
                padding: 0px;
                width: 52px;
                height: 52px;
            `
        }
    }}

`;
