import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Typography from "../../components/Typography/Typography";
import Box from "../../components/Box/Box";
import Description from "../../components/Description/Description";
import CardServices from "../../components/CardsServices/CardServices";
import CardsWorks from '../../components/CardsWorks/CardsWorks';
import Enterprise from "../../components/Enterprises/Enterprise";

export default function Home(){
    return(
        <>
            <Container size='large'>
                <Container size='medium'>
                    <Header />
                    <Box width={100} direction='row'>
                        <Box width={50} direction='column' content='center' align="center">
                            <div>
                                <Typography size='large' color='primary'>
                                    Hello, I'm John, a
                                    <Typography size="large" color='info'>
                                        Software Engineer.
                                    </Typography>
                                </Typography>
                                <Typography size='small' color='primary' top={30} bottom={30}>
                                    Product Designer, UI/UX Designer, and developer based in Brazil.
                                    Over the past 17 years, as an art director and designer,
                                    I’ve worked with big companies and up-and-coming startups.
                                </Typography>
                            </div>
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
                        </Box>
                        <Box width={50}>
                            <img src={require('../../assets/images/Image.png')} alt="foto" />
                        </Box>
                    </Box>
                </Container>
            </Container>
            <Description />
            <CardServices />
            <CardsWorks />
            <Enterprise />
        </>
    )
}