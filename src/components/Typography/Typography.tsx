import { StyledTypography, colorTypography, sizeTypography } from "./style"

interface IPropsTypography {
    size: sizeTypography;
    color: colorTypography;
    children: string | React.ReactNode;
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
}

export default function Typography({ 
    size, 
    color, 
    children,
    top,
    bottom,
    right,
    left
 }: IPropsTypography){
    return(
        <StyledTypography
            color={color}
            size={size}
            top={top}
            bottom={bottom}
            right={right}
            left={left}
        >
            {children}
        </StyledTypography>
    )
}