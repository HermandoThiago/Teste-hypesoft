import styled, { css } from 'styled-components';

export type sizeTypography = 'small' | 'medium' | 'large';
export type colorTypography = 'primary' | 'secondary';

interface IStyledTypography {
    size: sizeTypography;
    color: colorTypography;
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
}

export const StyledTypography = styled.p<IStyledTypography>`
    margin-top: ${props => `${props.top}px`};
    margin-left: ${props => `${props.left}px`};
    margin-bottom: ${props => `${props.bottom}px`};
    margin-right: ${props => `${props.right}px`};

    ${(props) => {
        if(props.size === 'small'){
            return css`
                font-size: 18px;
                font-weight: lighter;
            `
        }

        if(props.size === 'medium'){
            return css`
                font-size: 48px;
            `
        }

        if(props.size === 'large'){
            return css`
                font-size: 80px;
            `
        }
    }}
    
    ${(props) => {
        if(props.color === 'primary'){
            return css`
                color: #fff;
            `
        }

        if(props.color === 'secondary'){
            return css`
                color: #ED1CA6;
            `
        }
    }}
`