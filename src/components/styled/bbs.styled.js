import styled from "styled-components";
import { COLORS } from "../../common/constants/color";

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

    .ls-area .ls-prerender {
        width: 100%;
        aspect-ratio: 16/9;
        min-height: calc(100vh - 70px);
    }

    .ls-area .ls-prerender > span{
        width: 100%;
        display: inline-block;
        align-self: center;
        font-size: 3rem;
        color: ${COLORS.STRONG_GRAY};
    }

    .ls-wrap{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .ls-info{
        width: calc(100% - 20px);
        background-color: ${COLORS.GRAY};
        border-radius: 10px;
        padding:10px;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .ls-title {
        font-size: 1.25rem;
        margin: 5px 0px 5px 5px;
    }

    .ls-status {
        margin: 5px 0px 5px 5px;
    }

    .ls-channel {
        display: flex;
        flex-direction: row;
        margin: 5px 0px 5px 10px;
    }

    .ls-channel-name {
        line-height: 50px;
        margin-left: 10px;
    }

    .ls-channel-name > a{
        color: ${COLORS.BLUE};
        text-decoration: none;
    }

    .ls-statistics {
        margin: 5px 0px 5px 5px;
    }

    .bbs-area {
        width: 20%;
        background-color: ${COLORS.GRAY};
        display: flex;
        flex-direction: column;
    }

    .bbs-list{
        width: 100%;
        height:90%;
        background-color: ${COLORS.GRAY};
    }

    .bbs-form {
        width: 100%;
        height: 10%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .bbs-form > form {
        width: calc(100% - 10px);
        display: flex;
        flex-direction: row;
        padding: 5px;
    }

    .bbs-form > form > textarea {
        width: calc(75% - 20px);
        border: none;
        padding: 10px;
        border-radius: 10px;
    }

    .bbs-form > form > button {
        width: calc(25% - 5px);
        margin-left: 5px;
    }

    .bbs-item {
        background-color: ${COLORS.WHITE};
        border-radius: 5px;
        margin: 5px 0px 5px;
        padding: 10px;
    }

    .bbs-item-info{
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
    }

    .bbs-nickname {
        width: 20%;
    }

    .bbs-createtime {
        display: inline-block;
        text-align: end;
        width: 80%;
        color: ${COLORS.STRONG_GRAY};
        font-size: 0.75rem;
    }

    .bbs-item-content {
        text-align:start;
        font-size: 0.9rem;
        margin-bottom: 10px;
    }

    .bbs-item-footer {
        display: flex;
        flex-direction: column-reverse;
    }
`;

export default StyledBbs;