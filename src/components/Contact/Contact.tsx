import Container from "../Container/Container";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { 
    MediumInput, 
    FullInput, 
    FullTextArea, 
    StyledContainerContact, 
    StyledContainerInfo,
    StyledContact
} from './style';
import { FiSend } from 'react-icons/fi';
import { 
    AiOutlineMail,
    AiOutlineDribbble, 
    AiOutlineBehance, 
    AiOutlineFacebook, 
    AiOutlineTwitter, 
    AiOutlineInstagram, 
    AiOutlineYoutube
} from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import Info from "./Info/Info";
import ButtonIcon from "./ButtonIcon/ButtonIcon";
import { RiMapPin2Line } from 'react-icons/ri';

export default function Contact(){
    return(
        <Container size='medium' id='contact'>
            <StyledContact width={100} py={100} direction='row'>
                <StyledContainerContact width={55} py={40} px={40} direction='column'>
                    <Typography size='medium' color='black' bottom={15}>Let me know here.</Typography>
                    <Box width={100} top={10} content='space-between'>
                        <MediumInput placeholder="Fullname" />
                        <MediumInput placeholder="Email address" />
                        <FullInput placeholder="Subject" />
                        <FullTextArea placeholder="Message" />
                        <Button size='medium' color='secondary' top={20}>Send message <FiSend size={20}/></Button>
                    </Box>
                </StyledContainerContact>
                <StyledContainerInfo width={43} py={40} px={40} direction='column'>
                    <Typography size='medium' color='black' bottom={15}>Get In Touch</Typography>
                    <Box width={100}>
                        <Info icon={<RiMapPin2Line size={28} />}>
                            <span>House #5, Street Number #98,</span>
                            <span> brasilia-70000-000, Brazil.</span>
                        </Info>
                        <Info icon={<AiOutlineMail size={25} />}>
                            <span>albert.design@gmail.com</span>
                            <span>albert.flores@gmail.com</span>
                        </Info>
                        <Info icon={<BsTelephone size={25} />}>
                            <span>+55 955 258 2699</span>
                            <span>+55 955 100 9449</span>
                        </Info>
                    </Box>
                    <Box width={100} top={10} direction='row' align="center" content='space-between'>
                        <ButtonIcon icon={<AiOutlineDribbble size={25} />} />
                        <ButtonIcon icon={<AiOutlineBehance size={25} />} color='purple'/>
                        <ButtonIcon icon={<AiOutlineFacebook size={25} />} />
                        <ButtonIcon icon={<AiOutlineTwitter size={25} />} />
                        <ButtonIcon icon={<AiOutlineInstagram size={25} />} />
                        <ButtonIcon icon={<AiOutlineYoutube size={25} />} />
                    </Box>
                </StyledContainerInfo>  
            </StyledContact>
        </Container>
    )
}