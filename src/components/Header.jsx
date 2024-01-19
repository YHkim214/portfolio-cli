import { useContext} from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { MemberContext } from "../contexts/MemberContext";
import StyledHeader from "./styled/header.styled";
import Navigation from "./styled/navigation.styled";

function Header() {
    const memberContext = useContext(MemberContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        memberContext.logout();
        navigate('/');
    }

    return(
        <StyledHeader>
            <Navigation>
                <li><NavLink to="/">홈</NavLink></li>
                <li>{memberContext.isLoggedIn ? <span>{memberContext.memberInfo.memberName}님 환영합니다!</span> : <NavLink to="/join">회원가입</NavLink>}</li>
                <li>{memberContext.isLoggedIn ? <button onClick={handleLogout}>로그아웃</button> : <NavLink to="/login">로그인</NavLink>}</li>
            </Navigation>
        </StyledHeader>
    );
}

export default Header;