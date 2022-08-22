import styled, { css } from 'styled-components';

export type sizeTypography = 'small' | 'medium' | 'large';
export type colorTypography = 'primary' | 'secondary';

interface IStyledTypography {
    size: sizeTypography;
    color: colorTypography;
}

export const StyledTypography = styled.p<IStyledTypography>`
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