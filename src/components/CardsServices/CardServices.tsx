import Container from '../Container/Container';
import Box from '../Box/Box';
import Typography from '../Typography/Typography';
import Separator from '../Separator/Separator';
import Card from './Card/Card';
import { MdOutlineLayers, MdOutlineCode, MdOutlineViewInAr, MdOutlinePause } from 'react-icons/md';
import { StyledContainerService } from './style';

export default function CardServices(){
    return(
        <Container size='medium' id='services'>
            <Box width={100} py={70} direction='column' content='center' align='center'>
                <Box width={100} direction='column' align='center' content='center'>
                    <Typography size='medium' color='primary' bottom={10} align='center'>My Service</Typography>
                    <Separator/>
                </Box>
                <StyledContainerService direction='row' content='space-between' width={100} top={30}>
                    <Card icon={<MdOutlineLayers size={42} />}>
                        <Typography size='medium' color='black'>UI/UX</Typography>
                        <Typography size='medium' color='black'>Designer</Typography>
                    </Card>
                    <Card icon={<MdOutlineViewInAr size={42} />}>
                        <Typography size='medium' color='black'>Product</Typography>
                        <Typography size='medium' color='black'>Design</Typography>
                    </Card>
                    <Card icon={<MdOutlinePause size={42} />}>
                        <Typography size='medium' color='black'>Branding</Typography>
                        <Typography size='medium' color='black'>Design</Typography>
                    </Card>
                    <Card icon={<MdOutlineCode size={42} />}>
                        <Typography size='medium' color='black'>Front End</Typography>
                        <Typography size='medium' color='black'>Development</Typography>
                    </Card>
                </StyledContainerService>
            </Box>
        </Container>
    )
}