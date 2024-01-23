import { useState } from "react";
import LiveStreamListItem from "./LiveStreamListItem";
import { StyledLiveStreamList, StyledLiveStreamListItem } from "./styled/liveStream.styled";

const LiveStreamList = () => {
    const [liveStreamList, setLiveStreamList] = useState([]);

    return(
        <StyledLiveStreamList>
            <LiveStreamListItem/>
            <LiveStreamListItem/>
            <LiveStreamListItem/>
            <LiveStreamListItem/>
            <LiveStreamListItem/>
            <LiveStreamListItem/>
        </StyledLiveStreamList>
    );
};

export default LiveStreamList;