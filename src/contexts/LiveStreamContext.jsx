import { createContext, useState } from "react";
import { axiosWrapper } from "../common/configs/axiosConfig";
import { GET_LIVE_STREAM_LIST, GET_LIVE_STREAM } from "../common/constants/api";

const LiveStreamContext = createContext({
    liveStreamList: [],
    getLiveStreamList: (date) => {},
    setLiveStreamList: () => {},
    getLiveStreamById: (id) => {}
})

const LiveStreamContextProvider = ({children}) => {

    const [liveStreamList, setLiveStreamList] = useState([]);

    const getLiveStreamList = (searchDate) => {
        axiosWrapper.get(GET_LIVE_STREAM_LIST, {
            params: {
                date: searchDate
            }
        })
        .then((response) => {
            setLiveStreamList(response.data.data);
        })
        .catch((error) => {
            Promise.reject(error);
        })
    }

    const getLiveStreamById = async (lsId) => {
        const result = await axiosWrapper.get(`${GET_LIVE_STREAM}${lsId}`)
        .then((response) => {
            const liveStream = response.data.data;
            return liveStream;
        })
        .catch((error) => Promise.reject(error))

        return result
    }

    const contextValue = {
        liveStreamList: liveStreamList,
        getLiveStreamList: getLiveStreamList,
        setLiveStreamList: setLiveStreamList,
        getLiveStreamById: getLiveStreamById
    }

    return <LiveStreamContext.Provider value={contextValue}>{children}</LiveStreamContext.Provider>
}

export {LiveStreamContext, LiveStreamContextProvider}