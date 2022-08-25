import { StyledCardEnterprise } from './style';
import { BsArrowRight } from 'react-icons/bs';

interface IPropsCardEnterprise {
    image?: string;
}

export default function EnterpriseCard({ image }: IPropsCardEnterprise){
    return(
        <StyledCardEnterprise>
            { image ? 
                <img src={require(`../../../assets/images/enterprises/${image}`)} alt="" /> : 
                <BsArrowRight size={30}/> }
        </StyledCardEnterprise>
    )
}