import styled from "styled-components";

const StyledViewerBadge = styled.div`
    width: fit-content;
    background-color: ${(props) => props.$background || "red"};
    color: ${(props) => props.$color || "#FAFAFA"};
    border-radius: 3px;
    font-size: 0.7rem;
    padding: 2px;
`

export default StyledViewerBadge;