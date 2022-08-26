import Container from "../../components/Container/Container";
import Typography from "../../components/Typography/Typography";
import Box from "../../components/Box/Box";
import { StyledButtonHi, StyledContainerImage, StyledContainerDescription } from './style';
import { BsArrowRight } from 'react-icons/bs';

export default function Description(){
    return(
        <Container size='medium'>
                <Box width={100} py={50} content='center' align='center'>
                    <StyledContainerImage width={40} py={40}>
                        <img src={require('../../assets/images/notebook.png')} alt='notebook' style={{ boxShadow: '20px 20px #fff', borderRadius: '10px' }}/>
                    </StyledContainerImage>
                    <StyledContainerDescription width={60} direction='column' py={40} px={80} align='left'>
                        <Typography size='medium' color="primary">
                        Software Engineer and Infrastructure specialist based in Brazil.
                        </Typography>
                        <Typography size='small' color="primary" top={20}>
                        Morbi quam velit, euismod in imperdiet vitae, 
                        elementum et elit. Nunc finibus, felis sit amet 
                        sollicitudin sollicitudin, nisi magna feugiat enim, 
                        in maximus urna enim ac tortor. Nunc in volutpat ipsum, 
                        molestie commodo odio. Quisque auctor nisi mi. 
                        Aenean venenatis sapien et interdum interdum.
                        </Typography>
                        <Box width={100} top={20} bottom={20} align='center' content='center'>
                            <Box width={50} direction='row'>
                                <Typography size='medium' color='secondary'>17+</Typography>
                                <Typography size='small' color="primary" left={12}>Years of <Typography size='small' color="primary">Experience</Typography></Typography>
                            </Box>
                            <Box width={50} direction='row'>
                            <Typography size='medium' color='secondary'>325+</Typography>
                            <Typography size='small' color="primary" left={12}>Completed <Typography size='small' color="primary">Projects</Typography></Typography>
                            </Box>
                        </Box>
                        <StyledButtonHi color='secondary'>SAY HI <BsArrowRight size={25} /></StyledButtonHi>
                    </StyledContainerDescription>
                </Box>
            </Container>    
    )
} 