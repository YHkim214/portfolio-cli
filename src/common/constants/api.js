// api주소
export const HOST = "http://localhost:8080";
export const API_HOST = "http://localhost:8080/api";

export const JOIN_MEMBER_API = "/auth/register";
export const LOGIN_MEMBER_API = "/auth/login";
export const GET_MEMBER_INFO_API = "/member/getMemberInfo";

export const REFRESH_API= "/auth/refresh";

export const GET_LIVE_STREAM_LIST = "/liveStream/list";
export const GET_LIVE_STREAM = "/liveStream"

export const CHANGE_NICKNAME_API = "/member/changeNickname";
export const CHANGE_PASSWORD_API = "/member/changePassword"; 

export const INSERT_BBS_API = "/bbs/insert"
export const GET_BBS_API = "/bbs/list"
export const RECOMMEND_BBS_API = "/bbs/recommend"
export const DELETE_BBS_API = "/bbs/delete"

// 에러코드
export const ERROR_CODE_DUP_MEMBER = "901"; 
export const ERROR_MESSAGE_DUP_MEMBER = "중복된 아이디 입니다";