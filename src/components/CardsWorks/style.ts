import styled from 'styled-components';
import { StyledBox } from '../Box/style';

export const StyledContainerWorks = styled(StyledBox)`
    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 0 30px;
        
        div{
            width: 100%;
        }
    }
`
