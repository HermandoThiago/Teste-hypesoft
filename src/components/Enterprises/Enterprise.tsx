import Container from "../Container/Container";
import Box from "../Box/Box";
import EnterpriseCard from "./EnterpriseCard/EnterpriseCard";
import { StyledSpan, StyledTextEnterprises, StyledContainerEnterprises } from './style';

const listImages = ['youtube.png', 'google.png', 'adobe.png', 'sketch.png', ''];

export default function Enterprise(){
    return(
        <Container size='medium'>
            <StyledContainerEnterprises width={100} py={80} direction='row' align="center" content="center">
                <Box width={15}>
                    <StyledTextEnterprises>I worked with <StyledSpan>289+</StyledSpan> Companies all over the World.</StyledTextEnterprises>
                </Box>
                <Box width={85} direction='row' px={30}>
                    {listImages.map(card => (
                        <EnterpriseCard image={card} />    
                    ))}
                </Box>
            </StyledContainerEnterprises>
        </Container>    
    )
}