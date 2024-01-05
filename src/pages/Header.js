import { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import { getMemberInfo } from "../common/api/userApi";

function Header() {
    const [member, setMember] = useState({
        memberName:'',
        memberId:'',
        memberNickName:'',
        memberThumbnailUrl:''
    });

    const ACCESS_TOKEN = localStorage.getItem('accessToken');

    useEffect(() => {
        if(ACCESS_TOKEN) {
            getMemberInfo()
        }
    }, [ACCESS_TOKEN]);

    return(
        <ul>
            <li><NavLink to="/">홈</NavLink></li>
            <li><NavLink to="/join">회원가입</NavLink></li>
            <li><NavLink to="/login">로그인</NavLink></li>
        </ul>
    );
}

export default Header;