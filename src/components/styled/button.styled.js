import {styled, css} from "styled-components";
import { COLORS } from "../../common/constants/color";

const StyledButton = styled.button`
    display: inline-block;
    width: ${(props) => props.width || "120px"};
    line-height: ${(props) => props.height || "40px"};
    background-color: ${(props) => props.$background || COLORS.BLUE};
    color: ${(props) => props.$color || "white"};
    border-radius: 5px;
    border: 0;
    font-size: 15px;
    

    &:hover {
        filter: brightness(85%);
        cursor: pointer;
    }

    ${(props) => props.disabled && 
    css`
        background-color: ${COLORS.GRAY};
        color: ${COLORS.DISABLED_TEXT};
        
        &:hover {
            background-color: ${COLORS.GRAY};
            cursor: default;
        }   
    `}


`

export default StyledButton;