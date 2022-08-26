import { StyledHeader } from "./style";
import Typography from "../Typography/Typography";
import Box from "../Box/Box";
import { Link } from 'react-scroll';

export default function Header(){
    return(
        <StyledHeader>
            <Box width={36} py={25} direction='row'>
            <Link to="description" spy={true} smooth={true} offset={50} duration={500}><Typography size="small" color="primary">ABOUT</Typography></Link>
            <Link to="services" spy={true} smooth={true} offset={50} duration={500}><Typography size="small" color="primary">SERVICES</Typography></Link>
            <Link to="works" spy={true} smooth={true} offset={50} duration={500}><Typography size="small" color="primary">WORKS</Typography></Link>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}><Typography size="small" color="primary">CONTACT</Typography></Link>
                
                
                
            </Box>
        </StyledHeader>
    )
}