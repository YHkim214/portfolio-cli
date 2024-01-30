import StyledMemberMenu from "../styled/memberMenu.styled";


const MemberMenu = ({...props}) => {
    return (
            <StyledMemberMenu x={props.x} y={props.y} $isOpened={props.$isOpened}>
                <div className="menu-item" onClick={props.handleChangeNickname}>
                    닉네임 변경
                </div>
                <div className="menu-item" onClick={props.handleChangePassword}>
                    비밀번호 변경
                </div>
                <div className="menu-item" onClick={props.handleLogout}>
                    로그아웃
                </div>
            </StyledMemberMenu>
    )
}

export default MemberMenu;