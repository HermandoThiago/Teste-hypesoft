import { StyledBox, IStyledBox } from "./style";

interface IPropsBox extends IStyledBox {
    children: React.ReactNode;
}

export default function Box({ 
    children,
    width,
    direction,
    top,
    bottom,
    right,
    left,
    content,
    align
 }: IPropsBox){
    return(
        <StyledBox 
            width={width}
            direction={direction}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
            content={content}
            align={align}
        >
            {children}
        </StyledBox>
    )
}