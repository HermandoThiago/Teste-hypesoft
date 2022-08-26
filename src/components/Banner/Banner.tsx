import Container from '../Container/Container';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import { BsArrowRight } from 'react-icons/bs';
import { StyledBanner, StyledSpan, CircleLeft, CircleRight, DotLeft, DotRight } from './style';

export default function Banner(){
    return(
        <Container size='medium'>
            <StyledBanner width={100} py={50} px={20} direction='column' align='center' content='center'>
                <DotLeft src={require('../../assets/images/Dot.png')}/>
                <DotRight src={require('../../assets/images/Dot.png')}/>
                <CircleRight />
                <CircleLeft />
                <Typography size='medium' color='primary' bottom={10}>Got a project in mind? Let's make</Typography>
                <Typography size='medium' color='primary'>something awesome <StyledSpan>together</StyledSpan>.</Typography>
                <Button size='medium' color='secondary' top={20}>HIRE ME <BsArrowRight size={25}/></Button>
            </StyledBanner>
        </Container>
    )
}