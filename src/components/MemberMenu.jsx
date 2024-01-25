import StyledMemberMenu from "./styled/memberMenu.styled";

const MemberMenu = ({...props}) => {
    console.log(props);
    return (
            <StyledMemberMenu {...props}>
            </StyledMemberMenu>
    )
}

export default MemberMenu;