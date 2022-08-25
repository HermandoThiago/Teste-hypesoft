import { StyledHeader } from "./style";
import Typography from "../Typography/Typography";
import Box from "../Box/Box";

export default function Header(){
    return(
        <StyledHeader>
            <Box width={36} py={25} direction='row'>
                <Typography size="small" color="primary">ABOUT</Typography>
                <Typography size="small" color="primary">SERVICES</Typography>
                <Typography size="small" color="primary">WORKS</Typography>
                <Typography size="small" color="primary">CONTACT</Typography>
            </Box>
        </StyledHeader>
    )
}