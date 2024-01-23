import styled from "styled-components";

const StyledHeader = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;

    display: flex;

    background-color: #0099e5;

    z-index: 999;
`

const StyledNavigation = styled.div`
    width:80%;
    height:100%;

    ul{
        display: flex;
        flex-direction:row-reverse;
        list-style: none;
        align-items:center;
        height:100%;
        margin: 0 0 0 0;
    }
    
    li {
        margin-right: 20px;
    }
`

const StyledLogo = styled.div`
    width:20%;
    height:100%;
    display: flex;
    align-items:center;
`;

export {StyledHeader, StyledLogo, StyledNavigation};