import Container from "../Container/Container";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import Separator from "../Separator/Separator";
import Comment from "./Comment/Comment";

export default function Testimonial(){
    return(
        <Container size='medium'>
            <Box width={100} py={100} direction='column' align="center">
                <Typography size='medium' color='primary' bottom={10}>Testimonial</Typography>
                <Separator />
            </Box>
            <Box width={100} direction='row'>
                <Box width={20} direction='column'>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </Box>
                <Box width={80}>

                </Box>
            </Box>
        </Container>
    )
}