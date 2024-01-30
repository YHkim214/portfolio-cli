import styled from "styled-components";
import { COLORS } from "../../common/constants/color";

const StyledHeader = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;

    display: flex;

    background-color: ${COLORS.BLUE};

    z-index: 999;

    box-shadow: 0 0 2px ${COLORS.BLACK};
`

const StyledNavigation = styled.div`
    width:calc(80% - 20px);
    height:100%;
    margin-right: 20px;

    ul{
        display: flex;
        flex-direction:row-reverse;
        list-style: none;
        align-items:center;
        height:100%;
        margin: 0 0 0 0;
    }
    
    li {
        margin-right: 10px;
        color: ${COLORS.WHITE};
    }
`

const StyledLogo = styled.div`
    width:calc(20% - 20px);
    margin-left: 20px;
    height:100%;
    display: flex;
    align-items:center;
`;

export {StyledHeader, StyledLogo, StyledNavigation};