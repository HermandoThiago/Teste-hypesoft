import Box from '../../Box/Box';
import Typography from '../../Typography/Typography';
import { StyledComment, Circle, Legend } from './style';

export default function Comment(){
    return(
        <StyledComment width={100} direction='row' py={10} px={10}>
            <Box width={20}>
                <Circle />
            </Box>
            <Box width={80} px={10}>
                <Typography size='small' color='black'>Sundar Pichai</Typography>
                <Legend>CEO & Founder of <Legend color='rose'>Google</Legend></Legend>
            </Box>
        </StyledComment>
    )
}