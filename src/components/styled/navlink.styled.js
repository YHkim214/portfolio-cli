import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavTitle = styled(NavLink)`
    color: white;
    margin-left: 20px;
    text-decoration-line: none;
    font-size: 20px;
    font-weight:700;
`

const StyledNavItem = styled(NavLink)`
    color: white;
    text-decoration-line: none;
    font-size: 15px;
    font-weight:700;
`

export {StyledNavTitle, StyledNavItem};