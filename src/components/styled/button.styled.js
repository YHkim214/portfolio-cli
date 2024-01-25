import {styled, css} from "styled-components";

const StyledButton = styled.button`
    display: inline-block;
    width: ${(props) => props.width || "120px"};
    line-height: ${(props) => props.height || "40px"};
    background-color: ${(props) => props.$background || "#0099e5"};
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
        background-color: #f3f4f7;
        color: #caccd1;
        
        &:hover {
            background-color: #f3f4f7;
            cursor: default;
        }   
    `}


`

export default StyledButton;