import { LIVE_STREAMING_END, LIVE_STREAMING_LIVE, LIVE_STREAMING_UPCOMING } from "../../../common/constants/common";
import { getDiffString } from "../../../common/utils/dateUtil";
import { formatNumber } from "../../../common/utils/stringUtil";
import CircledImg from "../../common/CircledImg";

const LiveStreamInfo = ({...props}) => {
    const renderSwitch = (lsStatus) => {
        switch(lsStatus){
            case LIVE_STREAMING_UPCOMING:
                return getDiffString(props.liveStream.startTime);
            case LIVE_STREAMING_LIVE:
                return `${formatNumber(props.liveStream.concurrentViewer)}명 시청 중`;
            case LIVE_STREAMING_END:
                return "방송 종료";
            default:
                return "방송정보 미확인" ;
        }
    }

    return (
        <div className="ls-wrap">
            <div className="ls-channel">
                <div className="ls-channel-thumbnail">
                    <CircledImg radius="50px" src={props.liveStream.channelYtThumbnail}/>
                </div>
                <div className="ls-channel-name">
                    <a href={`https://www.youtube.com/channel/${props.liveStream.channelYtId}`} target="blank">{props.liveStream.channelName}</a>
                </div>
            </div>
            <div className="ls-info">
                <div className="ls-title">
                    {props.liveStream.lsName}
                </div>
                <div className="ls-status">
                    {renderSwitch(props.liveStream.lsStatus)}
                </div>
                
                <div className="ls-statistics">
                    최고 시청자 수 :{props.liveStream.maxViewer} 평균 시청자 수: {props.liveStream.avgViewer} 좋아요 수: {props.liveStream.goodCnt}
                </div>
            </div>
        </div>
    )
}

export default LiveStreamInfo;