import styled, { css } from 'styled-components';

export type sizeContainer = 'medium' | 'large';

interface IStyledContainer {
    size: sizeContainer;
}

export const StyledContainer = styled.div<IStyledContainer>`
    width: 100%;
    height: 100px;
    background-color: blue;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 auto;

    ${(props) => {
        if(props.size === 'medium'){
            return css`
                width: 1280px;
            `
        }

        if(props.size === 'large'){
            return css`
                width: 1920px;
            `
        }
    }}
`;
