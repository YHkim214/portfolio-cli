import {styled, css} from "styled-components";

const StyledButton = styled.button`
    display: inline-block;
    border-radius: 5px;
    border: 0;
    line-height: 40px;
    font-size: 15px;
    background-color: #0099e5;
    color: white;

    width: ${(props) => props.width || "120px"};

    &:hover {
        background-color: #006be5;
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