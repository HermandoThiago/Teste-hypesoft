import Container from "../Container/Container";
import Box from "../Box/Box";
import { StyledTextFooter } from './style';

export default function Footer(){
    return(
        <Container size='medium'>
            <Box width={100} py={100} direction='column' align='center' content='center'> 
                <img src={require('../../assets/images/hypesoft.png')} alt="logo da hypesoft" />
                <StyledTextFooter>
                    Made with <StyledTextFooter color='#ED1CA6'> ♥ </StyledTextFooter> 
                    by John and <StyledTextFooter color='#7D00FF'>Hypesoft</StyledTextFooter>
                </StyledTextFooter>
            </Box>
        </Container>
    )
}