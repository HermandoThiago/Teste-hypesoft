import { StyledTypography, colorTypography, sizeTypography } from "./style"

interface IPropsTypography {
    size: sizeTypography;
    color: colorTypography;
    children: string | React.ReactNode;
}

export default function Typography({ size, color, children }: IPropsTypography){
    return(
        <StyledTypography color={color} size={size}>
            {children}
        </StyledTypography>
    )
}