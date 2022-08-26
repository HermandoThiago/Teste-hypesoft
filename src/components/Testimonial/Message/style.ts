import styled from "styled-components";
import { StyledBox } from "../../Box/style";

export const StyledContainerMessage = styled(StyledBox)`
    width: 97%;
    height: 100%;
    margin-left: 3%;
    background: #fff;
    border-radius: 4px;
    position: relative;

    svg {
        fill: yellow;
        margin-right: 10px;
        z-index: 2;
    }

    @media screen and (max-width: 768px){
        margin-top: 20px !important;
    }

`;

export const QuotationLeft = styled.img`
    position: absolute;
    right: 7%;
`;

export const QuotationRight = styled.img`
    position: absolute;
    right: 2%;
`;

export const TextMessage = styled.p`
    font-size: 1.8rem;
    font-weight: lighter;
    line-height: 3rem;
    color: black;
    z-index: 2;
`;
