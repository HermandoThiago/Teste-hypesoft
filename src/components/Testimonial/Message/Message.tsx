import Box from "../../Box/Box";
import Typography from "../../Typography/Typography";
import { AiTwotoneStar } from 'react-icons/ai';
import { TextMessage, StyledContainerMessage, QuotationLeft, QuotationRight } from './style';

export default function Message(){
    return(
        <StyledContainerMessage width={100} direction='column' py={20} px={40}>
            <QuotationLeft src={require('../../../assets/images/aspa.png')} />
            <QuotationRight src={require('../../../assets/images/aspa.png')} />
            <Box width={100} top={15} direction='row' align="center" content='left'>
                <AiTwotoneStar size={35} />
                <Typography size='small' color="black">5.0 Star Rating</Typography>
            </Box>
            <Box width={100} py={8}>
            <TextMessage>
                “If you're looking for someone who will challenge your UX/UI thinking and really cut 
                to the core of what's important for users, then Jesse is your man. On top of that,
                he brings a level of enthusiasm to the craft that's energizing for everyone who works
                with him.”
            </TextMessage>
            </Box>
        </StyledContainerMessage>
    )
}