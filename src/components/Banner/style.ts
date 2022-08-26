import styled from 'styled-components';
import { StyledBox } from '../Box/style';

export const StyledSpan = styled.span`
    color: #ED1CA6;
`;

export const DotLeft = styled.img`
    position: absolute;
    z-index: 1;
    left: 10%;
    opacity: 50%;
`;

export const DotRight = styled.img`
    position: absolute;
    z-index: 1;
    right: 10%;
    bottom: 4%;
    width: 45px;
    max-width: 100%;
    rotate: 90deg;
    opacity: 50%;
`;

export const CircleRight = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #FFFFFF;
    opacity: 0.03;
    position: absolute;
    z-index: 1;
    right: 10%;
    top: 6%;
`;

export const CircleLeft = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: #FFFFFF;
    opacity: 0.03;
    position: absolute;
    z-index: 1;
    left: 2%;
    top: 50%;
`;

export const StyledBanner = styled(StyledBox)`
    position: relative;
    border-radius: 6px;
    overflow-y: hidden;

    p{
        font-weight: medium;
        font-size: 1.7rem;
        text-align: center;
        z-index: 2;
    }

    button{
        height: 45px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    svg{ margin-left: 10px; }

    @media screen and (max-width: 768px){
        p{ font-size: 1.3rem }
    }

`;
