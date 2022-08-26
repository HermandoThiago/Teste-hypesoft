import styled from 'styled-components';
import { StyledButton } from '../Button/style';
import { StyledBox } from '../Box/style';

export const StyledContainerDescription = styled(StyledBox)`
    @media screen and (max-width: 768px){
        width: 100%;
        text-align: center;
        padding: 100px 20px;

        div{
            width: 100%;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
        }

    }
`; 

export const StyledContainerImage = styled(StyledBox)`
    @media screen and (max-width: 768px){
        display: none;
    }
`; 

export const StyledButtonHi = styled(StyledButton)`
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        margin-left: 10px;
    }

    @media screen and (max-width: 768px){
        margin: 0 auto;
    }

`;
