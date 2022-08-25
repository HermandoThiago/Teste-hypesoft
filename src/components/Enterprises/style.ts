import styled from 'styled-components';
import { StyledBox } from '../Box/style';

export const StyledContainerEnterprises = styled(StyledBox)`
    @media screen and (max-width: 768px){
        flex-direction: column;

        div{
            width: 100%;
            margin-bottom: 20px;
        }

    }
`;

export const StyledTextEnterprises = styled.p`
    color: #fff;
    font-size: 1.3rem;

    @media screen and (max-width: 768px){
        text-align: center;
        width: 300px;
        margin: 0 auto;
        font-size: 1.5rem;
    }

`;

export const StyledSpan = styled.span`
    color: #ED1CA6;
    font-weight: normal;
`;
