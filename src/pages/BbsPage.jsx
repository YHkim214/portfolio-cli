import { useParams } from "react-router-dom";
import StyledBbs from "../components/styled/bbs.styled";
import { LiveStreamContext } from "../contexts/LiveStreamContext"
import { useContext, useEffect, useState } from "react";
import YoutubeIframe from "../components/pages/bbs/YoutubeIframe";
import LiveStreamInfo from "../components/pages/bbs/LiveStreamInfo";
import BbsForm from "../components/pages/bbs/BbsForm";


const BbsPage = ({children, ...props}) => {
    const [liveStreamList, setLiveStreamList] = useState([]);
    const [parentId, setParentId] = useState(null);
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
        getLiveStream();

        // const timer = setInterval(() => {
        //     getLiveStream(liveStreamIdList);
        // }, 60000)

        // return () => {
        //     clearInterval(timer);
        // };
    }, [])

    const handleRender = () => {
        if(liveStreamList.length > 0) {
            return (
                <><YoutubeIframe liveStream={liveStreamList[0]}/>
                <LiveStreamInfo liveStream={liveStreamList[0]}/></>
            )
        } else {
            return (
                <div className="ls-prerender">
                    <span>방송 정보를 불러오고 있습니다.</span>
                </div>
            )
        }
    }

    const getLiveStream = async () => {
        const response = await liveStreamContext.getLiveStreamById(liveStreamIdList[0]);
        setLiveStreamList([...liveStreamList, response]);
    }
    
    return (
        <StyledBbs>
            <div className="ls-area">
                {handleRender()}
            </div>
            <div className="bbs-area">
                <div className="bbs-list" setParentId={setParentId}></div>
                <div className="bbs-form">
                    <BbsForm lsId={liveStreamIdList[0]} parentId={parentId}/>
                </div>
            </div>
        </StyledBbs>
    )
}

export default BbsPage;