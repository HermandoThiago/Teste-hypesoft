import Box from "../../Box/Box";
import { CircleIcon, StyledInfo } from './style';

interface IPropsInfo {
    children: React.ReactNode;
    icon: React.ReactNode;
}

export default function Info({ children, icon }: IPropsInfo){
    return(
        <StyledInfo width={100} direction='row' py={10} px={10}>
            <CircleIcon>{icon}</CircleIcon>
            <Box width={80} direction='column' content='center' px={20}>
                {children}
            </Box>
        </StyledInfo>
    )
}