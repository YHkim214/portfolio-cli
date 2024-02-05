import { useContext, useEffect, useRef, useState } from "react";
import { MemberContext } from "../../contexts/MemberContext";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { StyledNavigation } from "../styled/header.styled";
import { StyledNavItem } from "../styled/navlink.styled";
import CircledImg from "../common/CircledImg";
import MemberMenu from "./MemberMenu";
import { JOIN, LOGIN } from "../../common/constants/navigation";
import { CHANGE_NICKNAME, CHANGE_PASSWORD } from "../../common/constants/navigation";

const Navigation = () => {
    const globalContext = useContext(GlobalContext);
    const memberContext = useContext(MemberContext);
    const thumbnailRef = useRef();
    const navigate = useNavigate();

    const [position, setPosition] = useState({x: "", y: ""});

    const toggleMemberMenu = () => {
        let boundingClientRect = thumbnailRef.current.getBoundingClientRect();
        setPosition({
            x: `${Math.floor(boundingClientRect.x)}px`,
            y: `${Math.floor(boundingClientRect.y) + 50}px`
        });
        globalContext.isMemberMenuOpened ? globalContext.setIsMemberMenuOpened(false) : globalContext.setIsMemberMenuOpened(true);
    }

    useEffect(() => {
        function handleResize() {
            if(globalContext.isMemberMenuOpened) globalContext.setIsMemberMenuOpened(false);
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    },[])

    const handleLogout = () => {
        alert('로그아웃 성공!');
        memberContext.logout();
        globalContext.setIsMemberMenuOpened(false);
        navigate('/');
    } 

    const handleChangeNickname = () => {
        globalContext.setIsMemberMenuOpened(false);
        navigate(CHANGE_NICKNAME);
    }

    const handleChangePassword = () => {
        globalContext.setIsMemberMenuOpened(false);
        navigate(CHANGE_PASSWORD);
    }

    const memberMenuProps = {
        x: position.x,
        y: position.y,
        $isOpened: globalContext.isMemberMenuOpened,
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