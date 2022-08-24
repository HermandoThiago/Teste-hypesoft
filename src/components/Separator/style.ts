import styled from 'styled-components';

export interface IStyledSeparator {
    align?: string;
}

export const StyledSeparator = styled.hr<IStyledSeparator>`
    width: 80px;
    border-radius: 50px;
    color: #ED1CA6;
    text-align: ${props => props.align};    
`;
