import styled from "styled-components";
import { StyledBox } from "../Box/style";
import { StyledTypography } from '../Typography/style';

export const TextApresentation = styled(StyledTypography)`
    @media screen and (max-width: 768px){
        color: #fff;
        font-size: 2.8rem;
        margin-top: 20px;
    }
`;

export const TextDescription = styled(StyledTypography)`
    @media screen and (max-width: 768px){
        color: #fff;
        margin-top: 20px;
    }
`;

export const StyledContainerApresentation = styled(StyledBox)`
    @media screen and (max-width: 768px){
        width: 100%;
        text-align: center;
        font-weight: medium;

        div{
            align-items: center;
            justify-content: center;
            padding: 0 20px;
        }

    }
`;


export const StyledContainerImage = styled(StyledBox)`
    @media screen and (max-width: 768px){
        display: none;
    }
`;
