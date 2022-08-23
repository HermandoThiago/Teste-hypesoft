import { StyledButton, IStyledButton } from "./style";

interface IPropsButton extends IStyledButton{
    children: string | React.ReactNode;
}

export default function Button({ 
    color, 
    children,
    top,
    bottom,
    right,
    left,
    size
}: IPropsButton){
    return(
        <StyledButton 
            color={color}
            top={top}
            bottom={bottom}
            right={right}
            left={left}
            size={size}
        >
            {children}
        </StyledButton>
    )
}