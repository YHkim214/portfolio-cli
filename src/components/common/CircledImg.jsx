import StyledCircledImg from "../styled/circledImg.styled";
import React from "react";

const CircledImg = React.forwardRef((props, ref) => {
 return <StyledCircledImg ref={ref} {...props}></StyledCircledImg>
});

export default CircledImg;