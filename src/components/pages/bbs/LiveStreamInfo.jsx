const LiveStreamInfo = ({...props}) => {
    return (
        <div className="ls-info">
            <div className="ls-title">
                {props.liveStream.lsName}
            </div>
            <div className="ls-status">
                {props.liveStream.lsStatus}{props.liveStream.concurrentViewer}
            </div>
            <div className="ls-statistics">
                {props.liveStream.maxViewer}{props.liveStream.avgViewer}{props.liveStream.goodCnt}
            </div>
        </div>
    )
}

export default LiveStreamInfo;