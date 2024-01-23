import { StyledLiveStreamListItem } from "./styled/liveStream.styled";
import CircledImg from "./CircledImg";

const LiveStreamListItem = ({...props}) => {
    
    const tmp = {
        lsId: 83,
        channelId: 151,
        lsName: "【#ホロ古のネットクイズ大会】ホロライブ古のネットミームクイズ大会ホロライブ古のネットミームクイズ大会ホロライブ古のネットミームクイズ大会",
        lsYtId: "y6GgSmiMYCQ",
        lsYtThumbnail: "https://i.ytimg.com/vi/y6GgSmiMYCQ/maxresdefault_live.jpg",
        startTime: "2024-01-23 12:00:00",
        endTime: null,
        maxViewer: 0,
        avgViewer: 0,
        goodCnt: 2349,
        lsStatus: "UPCOMMING",
        createTime: "2024-01-22T05:22:34.000+00:00",
        updateTime: "2024-01-23T02:56:54.000+00:00",
        channel: {
            channelId: 151,
            channelName: "Shirakami Fubuki",
            channelYtId: null,
            channelYtName: null,
            channelYtThumbnail: "https://yt3.ggpht.com/ytc/AIf8zZTq225XGcmMuK9jHOYAMRszHZQvGe0YfAPO9aKX9Q=s88-c-k-c0x00ffffff-no-rj",
            channelUploadId: null,
            channelStatus: null,
            createTime: null,
            updateTime: null
        }
    }

    return (
        <StyledLiveStreamListItem>
            <div className="ls-thumbnail">
                <div className="ls-thumbnail-image">
                    <img src={tmp.lsYtThumbnail} alt=""/>
                </div>
                <div className="ls-concurrent-viewer">7,000명 시청 중</div>
            </div>
            <div className="ls-info">
                <div className="channel-thumbnail">
                    <CircledImg src={tmp.channel.channelYtThumbnail} alt=""/>
                </div>
                <div className="ls-detail">
                    <div className="ls-name" title={tmp.lsName}>{tmp.lsName}</div>
                    <div className="ls-channel-name"><a href="https://www.youtube.com/@usadapekora" target="blank">{tmp.channel.channelName}</a></div>
                    <div className="ls-start">{tmp.startTime}</div>
                </div>
            </div>
            <div className="ls-statistics">
                <div className="ls-max">최대 시청자: {tmp.maxViewer}</div>
                <div className="ls-avg">평균 시청자{tmp.avgViewer}</div>
                <div className="ls-good">좋아요 수: {tmp.goodCnt}</div>
            </div>
        </StyledLiveStreamListItem>
    )

};

export default LiveStreamListItem;