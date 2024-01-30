import styled from "styled-components";
import { COLORS } from "../../common/constants/color";

const StyledCircledImg = styled.img`
    width: ${(props) => props.radius || "100%"};
    height: ${(props) => props.radius || "100%"};
    border-radius: 50%;
    background-color: ${COLORS.WHITE}
`

export default StyledCircledImg;