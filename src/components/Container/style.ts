import styled, { css } from 'styled-components';

export type sizeContainer = 'medium' | 'large';

interface IStyledContainer {
    size: sizeContainer;
}

export const StyledContainer = styled.section<IStyledContainer>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;

    ${(props) => {
        if(props.size === 'medium'){
            return css`
                max-width: 1280px;
            `
        }

        if(props.size === 'large'){
            return css`
                max-width: 1920px;
                background: linear-gradient(
                    to right,
                    #242424 0%,
                    #242424 62%,
                    #7D00FF 38%,
                    #7D00FF 100%
                );
            `
        }
    }}

    @media screen and (max-width: 768px){
        ${props => {
            if(props.size === 'large'){
                return css`
                    background: #242424;
                `
            }
        }}
    }


`;
