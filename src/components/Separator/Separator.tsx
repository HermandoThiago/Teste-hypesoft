import { StyledSeparator, IStyledSeparator } from './style';

export default function Separator({ align }: IStyledSeparator){
    return(
        <StyledSeparator align={align}/>
    )
}