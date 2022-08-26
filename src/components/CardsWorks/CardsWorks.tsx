import Container from '../Container/Container';
import Box from '../Box/Box';
import Typography from '../Typography/Typography';
import Separator from '../Separator/Separator';
import CardImage from './CardImage/CardImage';
import { StyledContainerWorks } from './style';

const dataCards = [
    { src: '1.png', text: 'Eduguard - E-learning Website' },
    { src: '2.png', text: 'Eduguard E-learning Website' },
    { src: '3.png', text: 'Huma Marketing Agency' },
    { src: '4.png', text: 'Beeryblog Blog Website' },
    { src: '5.png', text: 'Educare Elearning website' },
    { src: '6.png', text: 'Blogy Blog Website' }
]

export default function CardsWorks(){
    return(
        <Container size='medium' id='works'>
            <Box width={100} py={100} direction='column' content='center' align='center'>
                    <Typography size='medium' color='primary' bottom={10} align='center'>My Selected Work</Typography>
                    <Separator />
                <StyledContainerWorks width={100} direction='row' top={30}>
                    {dataCards.map(({ src, text }, i) => (
                        <CardImage
                            key={i}
                            image={src}
                            text={text}
                        />
                    ))}
                </StyledContainerWorks>
            </Box>
        </Container>
    )
}