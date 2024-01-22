import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";
import { useNavigate } from "react-router-dom";
import { StyledNavigation } from "./styled/header.styled";
import { StyledNavItem } from "./styled/navlink.styled";

const Navigation = () => {
    const memberContext = useContext(MemberContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        memberContext.logout();
        navigate('/');
    }

    return (
        <StyledNavigation>
            <ul>
                <li>{memberContext.isLoggedIn ? <button onClick={handleLogout}>로그아웃</button> : <StyledNavItem to="/join">회원가입</StyledNavItem>}</li>
                <li>{memberContext.isLoggedIn ? <span>{memberContext.memberInfo.memberName}님 환영합니다!</span> : <StyledNavItem to="/login">로그인</StyledNavItem>}</li>
            </ul>
        </StyledNavigation>
    );
}

export default Navigation;