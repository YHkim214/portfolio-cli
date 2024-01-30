import { useContext, useEffect, useRef, useState } from "react";
import { MemberContext } from "../../contexts/MemberContext";
import { useNavigate } from "react-router-dom";
import { StyledNavigation } from "../styled/header.styled";
import { StyledNavItem } from "../styled/navlink.styled";
import CircledImg from "../common/CircledImg";
import MemberMenu from "./MemberMenu";
import { JOIN, LOGIN } from "../../common/constants/navigation";
import { CHANGE_NICKNAME, CHANGE_PASSWORD } from "../../common/constants/navigation";

const Navigation = () => {
    const memberContext = useContext(MemberContext);
    const thumbnailRef = useRef();
    const navigate = useNavigate();

    const [position, setPosition] = useState({x: "", y: ""});
    const [isOpened, setIsOpened] = useState(false);

    const toggleMemberMenu = () => {
        let boundingClientRect = thumbnailRef.current.getBoundingClientRect();
        setPosition({
            x: `${Math.floor(boundingClientRect.x)}px`,
            y: `${Math.floor(boundingClientRect.y) + 50}px`
        });
        isOpened ? setIsOpened(false) : setIsOpened(true);
    }

    useEffect(() => {
        function handleResize() {
            if(isOpened) setIsOpened(false);
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    },[])

    const handleLogout = () => {
        alert('로그아웃 성공!');
        memberContext.logout();
        setIsOpened(false);
        navigate('/');
    } 

    const handleChangeNickname = () => {
        setIsOpened(false);
        navigate(CHANGE_NICKNAME);
    }

    const handleChangePassword = () => {
        setIsOpened(false);
        navigate(CHANGE_PASSWORD);
    }

    const memberMenuProps = {
        x: position.x,
        y: position.y,
        $isOpened: isOpened,
        handleLogout: handleLogout,
        handleChangeNickname: handleChangeNickname,
        handleChangePassword: handleChangePassword
    }

    return (
        <>
        <StyledNavigation>
            <ul>
                {!memberContext.isLoggedIn ? <li><StyledNavItem to={JOIN}>회원가입</StyledNavItem></li> : ''}
                {memberContext.isLoggedIn ? 
                    <>
                        <li><span>{memberContext.memberInfo.memberNickName}님 어서오세요!</span></li>
                        <li><CircledImg onClick={toggleMemberMenu} ref={thumbnailRef} radius="41px" src={memberContext.memberInfo.memberThumbnailFileUrl} alt=''/></li>
                    </> 
                    : 
                    <li><StyledNavItem to={LOGIN}>로그인</StyledNavItem></li>
                }
            </ul>
        </StyledNavigation>
        <MemberMenu {...memberMenuProps}/>
        </>
    );
}

export default Navigation;