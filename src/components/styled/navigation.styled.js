import styled from "styled-components";

const Navigation = styled.ul`
    display: flex;
    list-style: none;

    li + li {
        margin-left: 30px;
    }
`

export default Navigation;