import Container from "../Container/Container";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import Separator from "../Separator/Separator";
import Comment from "./Comment/Comment";
import Message from "./Message/Message";
import { StyledContainerTestimonial, StyledContainerComment } from './style';

export default function Testimonial(){
    return(
        <Container size='medium' id='testimonial'>
            <Box width={100} py={50} direction='column' align="center" top={80}>
                <Typography size='medium' color='primary' bottom={10}>Testimonial</Typography>
                <Separator />
            </Box>
            <StyledContainerTestimonial width={100} direction='row'>
                <StyledContainerComment width={20} direction='column' content='space-between'>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </StyledContainerComment>
                <Box width={80}>
                    <Message />
                </Box>
            </StyledContainerTestimonial>
        </Container>
    )
}