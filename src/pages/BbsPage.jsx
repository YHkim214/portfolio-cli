import { useParams } from "react-router-dom";
import StyledBbs from "../components/styled/bbs.styled";
import { LiveStreamContext } from "../contexts/LiveStreamContext"
import { useContext, useEffect, useState } from "react";
import YoutubeIframe from "../components/pages/bbs/YoutubeIframe";
import LiveStreamInfo from "../components/pages/bbs/LivsStreamInfo";


const BbsPage = ({children, ...props}) => {
    const [liveStreamList, setLiveStreamList] = useState([]);
    const liveStreamContext = useContext(LiveStreamContext);
    let {id} = useParams();

    let liveStreamIdList = [];

    if(id) {
        //처음 진입한 경우
        liveStreamIdList.push(id);
        localStorage.setItem('liveStreamIdList', JSON.stringify(liveStreamIdList));
    } else {
        //새로고침으로 진입한 경우
        liveStreamIdList = JSON.parse(localStorage.getItem('liveStreamList'));
    }

    useEffect( () => {
        getLiveStream(liveStreamIdList);
    }, [])

    const getLiveStream = async () => {
        const response = await liveStreamContext.getLiveStreamById(liveStreamIdList[0]);
        setLiveStreamList([...liveStreamList, response]);
    }
    
    return (
        <StyledBbs>
            <div className="ls-area">
                {liveStreamList.length > 0 && 
                <><YoutubeIframe liveStream={liveStreamList[0]}/>
                <LiveStreamInfo liveStream={liveStreamList[0]}/></>
                }
            </div>
            <div className="bbs-area"></div>
        </StyledBbs>
    )
}

export default BbsPage;