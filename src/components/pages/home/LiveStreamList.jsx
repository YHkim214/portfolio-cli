import { useEffect, useState } from "react";
import LiveStreamListItem from "./LiveStreamListItem";
import { StyledLiveStreamList } from "../../styled/liveStream.styled";
import { axiosWrapper } from "../../../common/configs/axiosConfig";
import { GET_LIVE_STREAM_LIST } from "../../../common/constants/api";
import { getBeforeDayDateString, getNextDayDateString, getTodayDateString } from "../../../common/utils/dateUtil";

const LiveStreamList = () => {
    const [liveStreamList, setLiveStreamList] = useState([]);
    const [searchDate, setSearchDate] = useState(getTodayDateString());

    useEffect(() => {
        axiosWrapper.get(GET_LIVE_STREAM_LIST, {
            params: {
                date: searchDate
            }
        })
        .then((response) => {
            setLiveStreamList(response.data.data);
        })
        .catch((error) => {
            alert(error);
        })
    },[searchDate])

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
            {liveStreamList && liveStreamList.length > 0 ? liveStreamList.map((liveStream) => <LiveStreamListItem key={liveStream.lsId} {...liveStream} />) : <div className="ls-no-result"><span>현재 진행중이거나, 진행예정인 방송이 없습니다.</span></div>}
        </StyledLiveStreamList>
    );
};

export default LiveStreamList;