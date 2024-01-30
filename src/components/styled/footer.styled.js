import styled from "styled-components";
import { COLORS } from "../../common/constants/color";

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 70px;
    background-color: ${COLORS.GRAY};
    padding: 10px;

    span{
        color: ${COLORS.STRONG_GRAY};
    }

    z-index: 999;
`;

export default StyledFooter;