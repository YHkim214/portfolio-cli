import StyledViewerBadge from "../styled/viewerBadge.styled";
import { formatNumber } from "../../common/utils/stringUtil";
import { LIVE_STREAMING_LIVE, LIVE_STREAMING_UPCOMING } from "../../common/constants/common";

const ViewerBadge = ({...props}) => {
    if(props.status === LIVE_STREAMING_UPCOMING) {
        return <StyledViewerBadge $background="#6a737b" $color="white" className={props.className}>방송 예정</StyledViewerBadge>
    } else if(props.status === LIVE_STREAMING_LIVE) {
        return <StyledViewerBadge className={props.className}>{`${formatNumber(props.concurrentViewer)}명 시청 중`}</StyledViewerBadge>
    } else {
        return <StyledViewerBadge $background="#6a737b" $color="white" className={props.className}>방송 종료</StyledViewerBadge>
    }
}

export default ViewerBadge;