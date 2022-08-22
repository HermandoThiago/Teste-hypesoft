import { StyledContainer, sizeContainer } from "./style";

interface IPropsContainer {
    id?: string;
    children: React.ReactNode;
    size: sizeContainer;
}

export default function Container({ id, children, size }: IPropsContainer){
    return(
        <StyledContainer size={size} id={id}>
            {children}
        </StyledContainer>
    )
}