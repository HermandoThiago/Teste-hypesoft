import { StyledHeader } from "./style";
import Typography from "../Typography/Typography";

export default function Header(){
    return(
        <StyledHeader>
            <div className='nav'>
                <Typography size="small" color="primary">ABOUT</Typography>
                <Typography size="small" color="primary">SERVICES</Typography>
                <Typography size="small" color="primary">WORKS</Typography>
                <Typography size="small" color="primary">CONTACT</Typography>
            </div>
        </StyledHeader>
    )
}