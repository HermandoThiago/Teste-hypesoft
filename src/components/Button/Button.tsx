import { StyledButton, colorButon } from "./style";

interface IPropsButton {
    color: colorButon;
    children: string | React.ReactNode;
}

export default function Button({ color, children }: IPropsButton){
    return(
        <StyledButton color={color}>
            {children}
        </StyledButton>
    )
}