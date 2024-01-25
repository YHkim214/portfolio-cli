import styled from "styled-components";

const StyledCircledImg = styled.img`
    width: ${(props) => props.radius || "100%"};
    height: ${(props) => props.radius || "100%"};
    border-radius: 50%;
    background-color: white
`

export default StyledCircledImg;