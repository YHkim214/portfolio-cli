import { createContext, useEffect, useState } from "react";
import { JOIN_MEMBER_API, LOGIN_MEMBER_API, GET_MEMBER_INFO_API, HOST} from "../common/constants/api";
import { axiosWrapper, axiosWrapperAuth } from "../common/configs/axiosConfig";

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
    getMemberInfo: () => {}
});

export const MemberContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [memberInfo, setMemberInfo] = useState({
        memberName:'',
        memberId:'',
        memberNickName:'',
        memberThumbnailFileUrl:''
    });

    //최초진입 데이터 처리
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');

        const _memberName = localStorage.getItem('memberName');
        const _memberNickname = localStorage.getItem('memberNickname');
        const _memberId = localStorage.getItem('memberId');
        const _memberThumbnailFileUrl =localStorage.getItem('memberThumbnailFileUrl');

        if(accessToken) {
            if(!isLoggedIn) {
                setIsLoggedIn(true);
                setMemberInfo({
                    memberName: _memberName,
                    memberNickName: _memberNickname,
                    memberId: _memberId,
                    memberThumbnailFileUrl: _memberThumbnailFileUrl
                })
            }      
        }
    },[])

    const registerHandler = async (values) => {
        const formData = new FormData();
    
        Object.entries(values).forEach(([key, value]) => {
            if(value) {
                formData.append(key, value);
            }
        })

        const result = await axiosWrapper.post(JOIN_MEMBER_API, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(response => response)
        .catch(error => Promise.reject(error));

        return result;
    }

    const loginHandler = async (values) => {

        const result = await axiosWrapper.post(LOGIN_MEMBER_API, values)
        .then((response) => {
            localStorage.clear();
            localStorage.setItem('tokenType', response.data.data.tokenType);
            localStorage.setItem('accessToken', response.data.data.accessToken);
            localStorage.setItem('refreshToken', response.data.data.refreshToken);

            setIsLoggedIn(true);

            return response;
        })
        .catch(error => Promise.reject(error))

        return result;
    }

    const logoutHandler = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenType');
        localStorage.removeItem('refreshToken');

        localStorage.removeItem('memberName');
        localStorage.removeItem('memberNickname');
        localStorage.removeItem('memberId');
        localStorage.removeItem('memberThumbnailFileUrl');

        setMemberInfo({});
        setIsLoggedIn(false);
    }

    const getMemberInfoHandler = async() => {
        const result = await axiosWrapperAuth.get(GET_MEMBER_INFO_API)
        .then((response) => {
            let data = response.data.data;
            setMemberInfo({
                memberName: data.memberName,
                memberNickName: data.memberNickName,
                memberId: data.memberId,
                memberThumbnailFileUrl: HOST + data.memberThumbnailFileUrl
            });

            localStorage.setItem('memberName', data.memberName);
            localStorage.setItem('memberNickname', data.memberNickName);
            localStorage.setItem('memberId', data.memberId);
            localStorage.setItem('memberThumbnailFileUrl', HOST + data.memberThumbnailFileUrl);

            return response;
        })
        .catch((error) => Promise.reject(error))

        return result;
    }

    const contextValue = {
        isLoggedIn,
        memberInfo,
        register: registerHandler,
        login: loginHandler,
        logout: logoutHandler,
        getMemberInfo: getMemberInfoHandler
    }

    return(
        <MemberContext.Provider value={contextValue}>
            {children}
        </MemberContext.Provider>
    )

}

