import { useContext, useEffect, useState } from "react";
import LiveStreamListItem from "./LiveStreamListItem";
import { StyledLiveStreamList } from "../../styled/liveStream.styled";
import { getBeforeDayDateString, getNextDayDateString, getTodayDateString } from "../../../common/utils/dateUtil";
import { LiveStreamContext } from "../../../contexts/LiveStreamContext";

const LiveStreamList = () => {
    const liveStreamContext = useContext(LiveStreamContext);
    const [searchDate, setSearchDate] = useState(getTodayDateString());

    useEffect(() => {
        liveStreamContext.getLiveStreamList(searchDate);
    }, [searchDate]);

    const setDayBefore = () => {
        setSearchDate(getBeforeDayDateString(searchDate));
    }

    const setDayNext = () => {
        setSearchDate(getNextDayDateString(searchDate));
    }

    return(
        <StyledLiveStreamList>
            <div className="ls-list-title">
                <span className="before" onClick={setDayBefore}>{"<"}</span><span>{searchDate}</span><span className="next" onClick={setDayNext}>{">"}</span>
            </div>
            {liveStreamContext.liveStreamList && liveStreamContext.liveStreamList.length > 0 ? 
            liveStreamContext.liveStreamList.map((liveStream) => <LiveStreamListItem key={liveStream.lsId} {...liveStream} />) : 
            <div className="ls-no-result"><span>현재 진행중이거나, 진행예정인 방송이 없습니다.</span></div>}
        </StyledLiveStreamList>
    );
};

export default LiveStreamList;