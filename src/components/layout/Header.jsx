import Logo from "./Logo";
import Navigation from "./Navigation";
import { StyledHeader } from "../styled/header.styled";

function Header() {
    return(
        <StyledHeader>
            <Logo/>
            <Navigation/>
        </StyledHeader>
    );
}

export default Header;