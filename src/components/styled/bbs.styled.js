import styled from "styled-components";

const StyledBbs = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: row;
    padding-top: 70px;

    .ls-area {
        width: 80%;
        overflow-y: scroll;
    }

    .ls-area iframe {
        width: 100%;
        aspect-ratio: 16/9;
        min-height: calc(100vh - 70px);
    }

    .ls-area .ls-info{
        width: 100%;
        height: 200px;
        background-color: blue;
    }

    .bbs-area {
        width: 20%;
        background-color: yellow;
    }

`;

export default StyledBbs;