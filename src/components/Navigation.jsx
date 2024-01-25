import { useContext, useEffect, useRef, useState } from "react";
import { MemberContext } from "../contexts/MemberContext";
import { useNavigate } from "react-router-dom";
import { StyledNavigation } from "./styled/header.styled";
import { StyledNavItem } from "./styled/navlink.styled";
import Button from "./Button"
import CircledImg from "./CircledImg";
import MemberMenu from "./MemberMenu";

const Navigation = () => {
    const memberContext = useContext(MemberContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        memberContext.logout();
        navigate('/');
    }
    
    const thumbnailRef = useRef();

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

    return (
        <>
        <StyledNavigation>
            <ul>
                {!memberContext.isLoggedIn ? <li><StyledNavItem to="/join">회원가입</StyledNavItem></li> : <li><Button $background="grey" onClick={handleLogout}>로그아웃</Button></li>}
                {memberContext.isLoggedIn ? 
                    <>
                        <li><span>{memberContext.memberInfo.memberNickName}님 어서오세요!</span></li>
                        <li><CircledImg onClick={toggleMemberMenu} ref={thumbnailRef} radius="40px" src={memberContext.memberInfo.memberThumbnailFileUrl} alt=''/></li>
                    </> 
                    : 
                    <li><StyledNavItem to="/login">로그인</StyledNavItem></li>
                }
            </ul>
        </StyledNavigation>
        <MemberMenu x={position.x} y={position.y} $isOpened={isOpened}/>
        </>
    );
}

export default Navigation;