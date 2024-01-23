import StyledCircledImg from "./styled/circledImg.styled";

const CircledImg = ({children, ...props}) => {
    return <StyledCircledImg {...props}>{children}</StyledCircledImg>
}

export default CircledImg;