import styled from "styled-components";

const StyledLiveStreamList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const StyledLiveStreamListItem = styled.div`
    width: calc(20% - 10px);
    display: flex;
    flex-direction: column;
    aspect-ratio: 20/25;
    background-color: #f1f1f1;
    border-radius: 10px;
    margin: 5px 5px 5px 5px;

    .ls-thumbnail {
        width: calc(100% - 20px);
        height: calc(45% - 20px);
        padding: 10px;
        position: relative;
    }

    .ls-thumbnail .ls-thumbnail-image img {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .ls-thumbnail .ls-concurrent-viewer {
        display: inline-block;
        position: absolute;
        width: fit-content;
        bottom: 10px;
        right: 5%;
        background-color: red;
        color: #FAFAFA;
        border-radius: 3px;
        font-size: 0.7rem;
        padding: 2px;
    }

    .ls-info {
        width: calc(100% - 20px);
        padding: 0 10px 0;
        height: 25%;
        display: flex;
        flex-direction: row;
    }

    .ls-info .channel-thumbnail {
        width: 50px;
        height: 50px;
        align-self: center;
    }

    .ls-info .ls-detail{
        width: calc(100% - 60px);
        height: calc(100% - 10px);
        padding: 5px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .ls-info .ls-detail .ls-name {
        max-height: 50%;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 2; 
        overflow: hidden; 
        text-overflow: ellipsis;
    }

    .ls-info .ls-detail .ls-channel-name {
        height: 25%;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 2; 
        overflow: hidden; 
        text-overflow: ellipsis;
        text-align: start;
    }

    .ls-info .ls-detail .ls-channel-name > a {
        text-decoration: none;
        color: #0099e5;
    }

    .ls-info .ls-detail .ls-start {
        height: 25%;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 2; 
        overflow: hidden; 
        text-overflow: ellipsis;
        text-align: start;
    }

    .ls-statistics{
        width: calc(100% - 20px);
        height: calc(30% - 20px);
        padding: 10px;
    }
`;

export {StyledLiveStreamList, StyledLiveStreamListItem};