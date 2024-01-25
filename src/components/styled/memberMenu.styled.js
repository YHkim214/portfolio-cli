import styled from "styled-components";

const StyledMemberMenu = styled.div`
    width: 200px;
    height: 500px;
    position: absolute;
    left: ${(props) => props.x || 0};
    top: ${(props) => props.y || 0};
    display: ${(props) => props.$isOpened ? "visible" : "none"};
    background-color: yellow;
`

export default StyledMemberMenu;