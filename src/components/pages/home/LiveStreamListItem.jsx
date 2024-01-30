import { StyledLiveStreamListItem } from "../../styled/liveStream.styled";
import CircledImg from "../../common/CircledImg";
import ViewerBadge from "../../layout/ViewerBadge";

const LiveStreamListItem = ({...props}) => {

    return (
        <StyledLiveStreamListItem>
            <div className="ls-thumbnail">
                <div className="ls-thumbnail-image">
                    <img src={props.lsYtThumbnail} alt=""/>
                </div>
                <ViewerBadge className="ls-concurrent-viewer" status={props.lsStatus} concurrentViewer={props.concurrentViewer}/>
            </div>
            <div className="ls-info">
                <div className="channel-thumbnail">
                    <CircledImg src={props.channelYtThumbnail} alt=""/>
                </div>
                <div className="ls-detail">
                    <div className="ls-name" title={props.lsName}>{props.lsName.trim()}</div>
                    <div className="ls-channel-name"><a href={`https://www.youtube.com/channel/${props.channelYtId}`} target="blank">{props.channelName}</a></div>
                    <div className="ls-start">{props.startTime}</div>
                </div>
            </div>
            <div className="ls-statistics">
                <div className="ls-max">최대: {props.maxViewer}</div>
                <div className="ls-avg">평균:{props.avgViewer}</div>
                <div className="ls-good">좋아요: {props.goodCnt}</div>
            </div>
        </StyledLiveStreamListItem>
    )

};

export default LiveStreamListItem;