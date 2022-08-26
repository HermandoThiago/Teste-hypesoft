import styled from 'styled-components';
import { StyledBox } from '../../Box/style'; 

export const StyledInfo = styled(StyledBox)`
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 10px;

    span{
        color: black;
        font-weight: lighter;
        margin-bottom: 3px;
    }
`;

export const CircleIcon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #DFE3EB;
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        fill: #ED1CA6;
    }

`;
