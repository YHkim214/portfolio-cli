import StyledButton from "./styled/button.styled";

const Button = ({children, ...props}) => <StyledButton {...props}>{children}</StyledButton>

export default Button;