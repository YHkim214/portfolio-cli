import { NavLink} from "react-router-dom";

function Header() {
    return(
        <ul>
            <li><NavLink to="/">홈</NavLink></li>
            <li><NavLink to="/join">회원가입</NavLink></li>
            <li><NavLink to="/login">로그인</NavLink></li>
        </ul>
    );
}

export default Header;