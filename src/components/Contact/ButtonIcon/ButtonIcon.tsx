import { StyledButtonIcon } from './style';

interface IPropsButtonIcon {
    icon: React.ReactNode;
    color?: string;
}

 export default function ButtonIcon({ icon, color }: IPropsButtonIcon){
    return(
        <StyledButtonIcon color={color}>
            {icon}
        </StyledButtonIcon>
    )
}