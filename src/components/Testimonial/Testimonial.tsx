import Container from "../Container/Container";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import Separator from "../Separator/Separator";
import Comment from "./Comment/Comment";
import Message from "./Message/Message";

export default function Testimonial(){
    return(
        <Container size='medium'>
            <Box width={100} py={50} direction='column' align="center" top={80}>
                <Typography size='medium' color='primary' bottom={10}>Testimonial</Typography>
                <Separator />
            </Box>
            <Box width={100} direction='row'>
                <Box width={20} direction='column' content='space-between'>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </Box>
                <Box width={80}>
                    <Message />
                </Box>
            </Box>
        </Container>
    )
}