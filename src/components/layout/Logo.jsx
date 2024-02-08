import { StyledLogo } from "../styled/header.styled";
import { StyledNavTitle } from "../styled/navlink.styled";

const Logo = () => {
    return(
        <StyledLogo>
            <StyledNavTitle to="/">HoloBoard</StyledNavTitle>
        </StyledLogo>
    );
}

export default Logo;