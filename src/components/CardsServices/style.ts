import styled from 'styled-components';
import { StyledBox } from '../Box/style';

export const StyledContainerService = styled(StyledBox)`   
    svg{
        fill: black;
    }
    
    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 0 30px;
        
        div{
            width:100%;
            margin: 20px 0;
        }
    }
`;
