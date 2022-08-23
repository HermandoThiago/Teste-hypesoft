import styled from 'styled-components';

export interface IStyledBox {
    width: number;
    direction?: string;
    paddingY?: number;
    paddingX?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    content?: string;
    align?: string;
}

export const StyledBox = styled.div<IStyledBox>`
    display: flex;
    max-width: 100%;
    width: ${props => `${props.width}%`};
    flex-direction: ${props => `${props.direction}`};
    justify-content: ${props => `${props.content}`};
    justify-content: ${props => `${props.align}`};
    margin-top: ${props => `${props.top}px`};
    margin-bottom: ${props => `${props.bottom}px`};
    margin-right: ${props => `${props.right}px`};
    margin-left: ${props => `${props.left}px`};

    img{
        max-width: 100%;
    }

`
