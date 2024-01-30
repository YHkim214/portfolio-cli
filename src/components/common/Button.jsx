import StyledButton from "../styled/button.styled";
import React from "react";

const Button = ({children, ...props}) => <StyledButton {...props}>{children}</StyledButton>

export default Button;