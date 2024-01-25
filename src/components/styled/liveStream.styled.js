import styled from "styled-components";

const StyledLiveStreamList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .ls-list-title{
        width: 100%;
        text-align: start;
        margin: 20px 0 20px;
    }

    .ls-list-title > span{
        display: inline-block;
        font-size: 2rem;
        margin: 0 10px 0;
    }

    .ls-list-title .before, .next{
        cursor: pointer;
    }

    .ls-no-result{
        width: 100%;
        min-height: 500px;
        border-radius: 20px;
        background-color: #f1f1f1;
        display: flex;
    }

    .ls-no-result span{
        width: 100%;
        display: inline-block;
        align-self: center;
        font-size: 3rem;
        color: #6a737b;
    }
`

const StyledLiveStreamListItem = styled.div`
    width: calc(20% - 10px);
    display: flex;
    flex-direction: column;
    aspect-ratio: 20/23;
    background-color: #f1f1f1;
    border-radius: 10px;
    margin: 5px 5px 5px 5px;

    .ls-thumbnail {
        width: calc(100% - 10px);
        height: calc(60% - 10px);
        padding: 5px;
        position: relative;
    }

    .ls-thumbnail .ls-thumbnail-image {
        width: 100%;
        height: 100%;
    }

    .ls-thumbnail .ls-thumbnail-image img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 10px;
    }

    .ls-thumbnail .ls-concurrent-viewer {
        display: inline-block;
        position: absolute;
        bottom: 10%;
        right: 5%;
    }

    .ls-info {
        width: calc(100% - 20px);
        height: 25%;
        min-height: 90px;
        padding: 0 10px 0;
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
        min-height: 2rem;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 2; 
        overflow: hidden; 
        text-overflow: ellipsis;
        text-align: start;
    }

    .ls-info .ls-detail .ls-channel-name {
        height: 25%;
        display: -webkit-box; 
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 1; 
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
        -webkit-line-clamp: 1; 
        overflow: hidden; 
        text-overflow: ellipsis;
        text-align: start;
    }

    .ls-statistics {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .ls-statistics > div{
        display: inline-block;
        width: calc(33% - 10px);
        min-height: 1rem;
        padding: 5px;
    }
`;

export {StyledLiveStreamList, StyledLiveStreamListItem};