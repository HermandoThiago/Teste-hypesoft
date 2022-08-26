import styled, { css } from "styled-components";
import { StyledBox } from "../../Box/style";

interface LegendColor {
    color?: 'rose';
}

export const Circle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #A5A5A5;
`;

export const Legend = styled.span<LegendColor>`
    color: #737D8C;
    font-weight: lighter;
    font-size: 0.8rem;

    ${(props) => {
        if(props.color === 'rose'){
            return css`
                color: #ED1CA6;
            `
        }
    }}
`;

export const StyledComment = styled(StyledBox)`
    background: #FFFFFF;
    border-radius: 4px;
`;
