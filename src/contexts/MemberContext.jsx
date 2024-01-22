import { createContext, useState } from "react";
import { JOIN_MEMBER_API, LOGIN_MEMBER_API, GET_MEMBER_INFO_API,} from "../common/constants/api";
import { axiosWrapper, axiosWrapperAuth } from "../common/config/axiosConfig";

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
                memberThumbnailFileUrl: data.memberThumbnailFileUrl
            });

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

