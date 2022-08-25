import Typography from '../../Typography/Typography';
import Box from '../../Box/Box';
import { StyledCardImage } from './style';
import { BsArrowRight } from 'react-icons/bs';

interface IPropsCardImage {
    image: string;
    text: string;
}

export default function CardImage({ image, text }: IPropsCardImage){
    return(
        <StyledCardImage>
            <Box width={100}>
                <img src={require(`../../../assets/images/works/${image}`)} alt={image} />
            </Box>
            <Box width={100} px={20} top={20}>
                <Typography size='small' color='black'>{text}</Typography>
            </Box>
            <Box width={100} px={20} py={10}>
                <BsArrowRight size={25}  style={{fill: '#ED1CA6'}}/>
            </Box>
        </StyledCardImage>
    )
}