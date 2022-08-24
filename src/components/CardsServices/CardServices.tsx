import Container from '../Container/Container';
import Box from '../Box/Box';
import Typography from '../Typography/Typography';
import Separator from '../Separator/Separator';
import Card from './Card/Card';
import { FiCode, FiLayers, FiColumns, FiBox } from 'react-icons/fi';
import { StyledContainerService } from './style';

export default function CardServices(){
    return(
        <Container size='medium'>
            <Box width={100} py={70} direction='column' content='center' align='center'>
                <Box width={100} direction='column' align='center' content='center'>
                    <Typography size='medium' color='primary' bottom={10} align='center'>My Service</Typography>
                    <Separator/>
                </Box>
                <StyledContainerService direction='row' width={100} top={30}>
                    <Card icon={<FiLayers size={42} strokeWidth={1} stroke='currentColor'/>}>
                        <Typography size='medium' color='black'>UI/UX</Typography>
                        <Typography size='medium' color='black'>Designer</Typography>
                    </Card>
                    <Card icon={<FiBox size={42} strokeWidth={1} stroke='currentColor'/>}>
                        <Typography size='medium' color='black'>Product</Typography>
                        <Typography size='medium' color='black'>Design</Typography>
                    </Card>
                    <Card icon={<FiColumns size={42} strokeWidth={1} stroke='currentColor'/>}>
                        <Typography size='medium' color='black'>Branding</Typography>
                        <Typography size='medium' color='black'>Design</Typography>
                    </Card>
                    <Card icon={<FiCode size={42} strokeWidth={1} stroke='currentColor'/>}>
                        <Typography size='medium' color='black'>Front End</Typography>
                        <Typography size='medium' color='black'>Development</Typography>
                    </Card>
                </StyledContainerService>
            </Box>
        </Container>
    )
}