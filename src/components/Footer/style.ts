import styled from 'styled-components';

interface IStyledTextFooter {
    color?: string;
}

export const StyledTextFooter = styled.span<IStyledTextFooter>`
    margin-top: 10px;
    color: ${props => props.color};
`;
