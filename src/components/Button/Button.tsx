import { StyledButton, colorButon } from "./style";

interface IPropsButton {
    color: colorButon;
    children: string | React.ReactNode;
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
}

export default function Button({ 
    color, 
    children,
    top,
    bottom,
    right,
    left 
}: IPropsButton){
    return(
        <StyledButton 
            color={color}
            top={top}
            bottom={bottom}
            right={right}
            left={left}
        >
            {children}
        </StyledButton>
    )
}