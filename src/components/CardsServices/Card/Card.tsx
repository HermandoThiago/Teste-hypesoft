import Box from '../../Box/Box';
import Typography from '../../Typography/Typography';
import Separator from '../../Separator/Separator';
import { StyledCard } from "./style";
import { BsArrowRight } from 'react-icons/bs';

export interface IPropsCard {
    icon?: React.ReactNode;
    children: React.ReactNode
} 

export default function Card({ icon, children }: IPropsCard){
    return(
        <StyledCard>
            <Box width={100}>
                {icon}
            </Box>
            <Typography size='medium' color='black' top={100} bottom={12}>
                {children}
            </Typography>
            <Separator />
            <Box width={100} top={20}>
                <BsArrowRight size={30}  style={{fill: 'black'}}/>
            </Box>
        </StyledCard>
    )
}