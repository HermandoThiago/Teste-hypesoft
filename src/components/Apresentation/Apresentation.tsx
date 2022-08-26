import Container from "../Container/Container";
import Button from "../Button/Button";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import Header from "../Header/Header";
import { 
    StyledContainerImage, 
    StyledContainerApresentation, 
    TextApresentation, 
    TextDescription,
    StyledContainerHome
} from './style';

export default function Apresentation(){
    return(
        <Container size='medium'>
                    <Header />
                    <StyledContainerHome width={100} direction='row'>
                        <StyledContainerApresentation width={60} direction='column' content='center' align="center">
                            <Box width={100}>
                                <TextApresentation size='large' color='primary'>
                                    Hello, I'm John, a
                                    <TextApresentation size="large" color='info'>
                                        Software Engineer.
                                    </TextApresentation>
                                </TextApresentation>
                                <TextDescription size='small' color='primary' top={30} bottom={30}>
                                    Product Designer, UI/UX Designer, and developer based in Brazil.
                                    Over the past 17 years, as an art director and designer,
                                    I’ve worked with big companies and up-and-coming startups.
                                </TextDescription>
                            </Box>
                            <Box width={100}>
                                <Button color="secondary">HIRE ME</Button>
                                <Button color="primary" left={15}>VIEW WORK</Button>
                            </Box>
                            <Box width={100} top={200} direction='column'>
                                <Typography size="small" color="primary">Follow me on</Typography>
                                <Box width={100} top={10}>
                                    <Button color="primary" right={10} size='icon'>
                                        <img src={require('../../assets/images/basket.png')} alt="" />
                                    </Button>
                                    <Button color="secondary" right={10} size='icon'>
                                        <img src={require('../../assets/images/behance.png')} alt="" />
                                    </Button>
                                    <Button color="primary" right={10} size='icon'>
                                        <img src={require('../../assets/images/facebook.png')} alt="" />
                                    </Button>
                                    <Button color="primary" size='icon'>
                                        <img src={require('../../assets/images/twitter.png')} alt="" />
                                    </Button>
                                </Box>
                            </Box>
                        </StyledContainerApresentation>
                        <StyledContainerImage width={51}>
                            <img src={require('../../assets/images/Image.png')} alt="foto" />
                        </StyledContainerImage>
                    </StyledContainerHome>
                </Container>
    )
}