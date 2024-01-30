import styled from "styled-components";
import { COLORS } from "../../common/constants/color";

const StyledMemberMenu = styled.div`
    width: 10%;
    position: absolute;
    left: ${(props) => props.x || 0};
    top: ${(props) => props.y || 0};
    display: ${(props) => props.$isOpened ? "flex" : "none"};
    flex-direction: column;
    background-color: ${COLORS.WHITE};
    border: 1px solid gray;
    border-radius: 5px;
    overflow: hidden;

    .menu-item {
        width: 100%;
        margin: 0 auto;
        min-height: 50px;
        background-color: ${COLORS.WHITE};
        line-height: 50px;

        &:hover {
            cursor: pointer;
            filter: brightness(85%);
        }
    }
`

export default StyledMemberMenu;