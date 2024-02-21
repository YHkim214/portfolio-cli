import { useParams } from "react-router-dom";
import StyledBbs from "../components/styled/bbs.styled";
import { LiveStreamContext } from "../contexts/LiveStreamContext"
import { useContext, useEffect, useState } from "react";
import YoutubeIframe from "../components/pages/bbs/YoutubeIframe";
import LiveStreamInfo from "../components/pages/bbs/LiveStreamInfo";
import BbsForm from "../components/pages/bbs/BbsForm";
import { MemberContext } from "../contexts/MemberContext";
import BbsItem from "../components/pages/bbs/BbsItem";


const BbsPage = ({children, ...props}) => {
    const liveStreamContext = useContext(LiveStreamContext);
    const memberContext = useContext(MemberContext);
    const [liveStreamList, setLiveStreamList] = useState([]);
    const [bbsList, setBbsList] = useState([]);
    const [pageInfo, setPageInfo] = useState({
        page: 1,
        size: 20,
        memberId: memberContext.getMemberInfo?.memberId
    });
    const [parentId, setParentId] = useState(null);
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
        getBbsList(true);
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

    const getBbsList = async (isClear) => { 
        const response = await liveStreamContext.getBbsListById(pageInfo, liveStreamIdList[0]);
        console.log(response);
        if(isClear) {
            setBbsList([...response.bbsList])
        } else {
            setBbsList([...bbsList, ...response.bbsList]);
        }
    }
    
    return (
        <StyledBbs>
            <div className="ls-area">
                {handleRender()}
            </div>
            <div className="bbs-area">
                <div className="bbs-list" setParentId={setParentId}>
                    {bbsList.map((bbs) =><BbsItem key={bbs.bbsId} item={bbs} getBbsList={getBbsList}/>)}
                </div>
                <div className="bbs-form">
                    <BbsForm lsId={liveStreamIdList[0]} parentId={parentId} getBbsList={getBbsList}/>
                </div>
            </div>
        </StyledBbs>
    )
}

export default BbsPage;