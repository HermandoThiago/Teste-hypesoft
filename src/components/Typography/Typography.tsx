import { StyledTypography, IStyledTypography } from "./style"

interface IPropsTypography extends IStyledTypography{
    children: string | React.ReactNode;
}

export default function Typography({ 
    size, 
    color, 
    children,
    top,
    bottom,
    right,
    left,
    align
 }: IPropsTypography){
    return(
        <StyledTypography
            color={color}
            size={size}
            top={top}
            bottom={bottom}
            right={right}
            left={left}
            align={align}
        >
            {children}
        </StyledTypography>
    )
}