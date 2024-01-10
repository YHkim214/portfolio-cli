import { createContext, useState } from "react";
import axios from "axios";
import { JOIN_MEMBER_API, LOGIN_MEMBER_API, GET_MEMBER_INFO_API, REFRESH_API } from "../common/constants/api";

export const MemberContext = createContext({
    isLoggedIn: false,
    memberInfo:{
        memberName:'',
        memberId:'',
        memberNickName:'',
        memberThumbnailFileUrl:''
    },
    register: (values) => {},
    login: (values) => {},
    logout: () => {},
    getMemberInfo: () => {},
    refresh: () => {}
});

export const MemberContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [memberInfo, setMemberInfo] = useState({
        memberName:'',
        memberId:'',
        memberNickName:'',
        memberThumbnailFileUrl:''
    });

    const registerHandler = async (values) => {
        const promise = new Promise((resolve, reject) => {
            const formData = new FormData();
    
            Object.entries(values).map(([key, value]) => {
                if(value) {
                    formData.append(key, value);
                }
            })
    
            axios.post(JOIN_MEMBER_API, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            })
        })
        return promise;
    }

    const loginHandler = (values) => {
        const promise = new Promise((resolve, reject) => {
            axios.post(LOGIN_MEMBER_API, values)
            .then((response) => {
                localStorage.clear();
                localStorage.setItem('tokenType', response.data.data.tokenType);
                localStorage.setItem('accessToken', response.data.data.accessToken);
                localStorage.setItem('refreshToken', response.data.data.refreshToken);

                setIsLoggedIn(true);

                resolve(response);
            })
            .catch((error) => {
                reject(error);
            })
        })
        return promise;
    }

    const logoutHandler = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenType');
        localStorage.removeItem('refreshToken');

        setMemberInfo({});
        setIsLoggedIn(false);
    }

    const getMemberInfoHandler = async() => {
        let accessToken = localStorage.getItem('accessToken');
        let tokenType = localStorage.getItem('tokenType');
        let refreshToken = localStorage.getItem('refreshToken');

        const result = await axios.get(GET_MEMBER_INFO_API, {
            headers: {
                'Authorization': `${tokenType} ${accessToken}`,
                'Refresh-Token': `${tokenType} ${refreshToken}`
            }
        })
        .then((response) => {
            let data = response.data.data;
            setMemberInfo({
                memberName: data.memberName,
                memberNickName: data.memberNickName,
                memberId: data.memberId,
                memberThumbnailFileUrl: data.memberThumbnailFileUrl
            });

            return response;
        })
        .catch((error) => {
            return error;
        })

        return result;
    }

    const refreshHandler = async () => {
        let accessToken = localStorage.getItem('accessToken');
        let refreshToken = localStorage.getItem('refreshToken');

        const result = await axios.post(REFRESH_API, {
                'oldAccessToken': accessToken,
                'refreshToken': refreshToken
            }
        )
        .then((response) => {
            let data = response.data.data;
            
            localStorage.setItem('accessToken', data.newAccessToken);

            return response;
        })
        .catch((error) => {
            return error;
        })

        return result;
    }

    const contextValue = {
        isLoggedIn,
        memberInfo,
        register: registerHandler,
        login: loginHandler,
        logout: logoutHandler,
        getMemberInfo: getMemberInfoHandler,
        refresh: refreshHandler
    }

    return(
        <MemberContext.Provider value={contextValue}>
            {children}
        </MemberContext.Provider>
    )

}

