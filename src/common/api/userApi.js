import axios from "axios";
import { JOIN_MEMBER_API, ERROR_CODE_DUP_MEMBER, ERROR_MESSAGE_DUP_MEMBER, LOGIN_MEMBER_API, GET_MEMBER_INFO_API } from "../constants/api";

const TOKEN_TYPE = localStorage.getItem('tokenType');
let ACCESS_TOKEN = localStorage.getItem('accessToken');

export const registerMember = (values, actions) => {
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
        alert('회원가입 완료!');
    })
    .catch((error) => {
        let response = error.response;
        if(response.data.header.code === ERROR_CODE_DUP_MEMBER) {
            actions.setFieldError('memberName', ERROR_MESSAGE_DUP_MEMBER);
        }
        actions.setSubmitting(false);
    })
}

export const login = (values, actions) => {
    axios.post(LOGIN_MEMBER_API, values)
    .then((response) => {
        localStorage.clear();
        localStorage.setItem('tokenType', response.data.data.tokenType);
        localStorage.setItem('accessToken', response.data.data.accessToken);
    })
    .catch((error) => {
        console.log(error);
    })
}

export const getMemberInfo = () => {
    axios.get(GET_MEMBER_INFO_API, {
        headers: {
            'Authorization': `${TOKEN_TYPE} ${ACCESS_TOKEN}`
        }
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
}