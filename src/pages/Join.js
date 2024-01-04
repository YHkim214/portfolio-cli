import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup'
import { ERROR_CODE_DUP_MEMBER, ERROR_MESSAGE_DUP_MEMBER, JOIN_MEMBER_API } from "../components/api";

function Join() {
    const JoinSchema = Yup.object().shape({
        memberName: Yup.string()
        .required('아이디를 입력해 주세요!'),
        memberPassword: Yup.string()
        .required('비밀번호를 입력해 주세요'),
        memberNickName: Yup.string()
        .required('닉네임을 입력해 주세요'),
        memberPasswordVal: Yup.string()
        .required('비밀번호 확인을 입력해 주세요')
        .oneOf([Yup.ref('memberPassword'), null], '비밀번호와 동일한 값을 입력해 주세요')
    })

    const submitHandler = (values, actions) => {
        const formData = new FormData();

        Object.entries(values).map(([key, value]) => {
            formData.append(key, value);
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
                actions.setFieldError("memberName", ERROR_MESSAGE_DUP_MEMBER);
            }
            actions.setSubmitting(false);
        })
    }

    return (
        <div>
            <h1>회원가입</h1>
            <Formik
                initialValues={{
                    memberName:'',
                    memberNickName:'',
                    memberPassword:'',
                    memberPasswordVal:'',
                    memberThumbnailFile: undefined
                }}
                validationSchema={JoinSchema}
                onSubmit={submitHandler}
            >
                {({errors, touched, isValid, dirty, isSubmitting, setFieldValue}) => (
                    <Form>
                        <div>
                            <label htmlFor="memberName">아이디</label>
                            <Field id="memberName" name="memberName" type="text" placeholder="아이디를 입력해 주세요"/>
                            {errors.memberName && touched.memberName && <span>{errors.memberName}</span>}
                        </div>
                        <div>
                            <label htmlFor="memberNickName">닉네임</label>
                            <Field id="memberNickName" name="memberNickName" type="text" placeholder="닉네임을 입력해 주세요"/>
                            {errors.memberNickName && touched.memberNickName && <span>{errors.memberNickName}</span>}
                        </div>
                        <div>
                            <label htmlFor="memberPassword">비밀번호</label>
                            <Field id="memberPassword" name="memberPassword" type="password" placeholder="비밀번호를 입력해 주세요"/>
                            {errors.memberPassword && touched.memberPassword && <span>{errors.memberPassword}</span>}
                        </div>
                        <div>
                            <label htmlFor="memberPasswordVal">비밀번호 확인</label>
                            <Field id="memberPasswordVal" name="memberPasswordVal" type="password" placeholder="비밀번호를 한번 더 입력해 주세요"/>
                            {errors.memberPasswordVal && touched.memberPasswordVal && <span>{errors.memberPasswordVal}</span>}
                        </div>
                        <div>
                        <label htmlFor="memberThumbnail">섬네일</label>
                            <input id="memberThumbnailFile" name="memberThumbnailFile" onChange={(e) => {
                                const file = e.target.files[0];
                                setFieldValue('memberThumbnailFile', file);
                            }} type="file"/>
                            {errors.memberThumbnailFile && touched.memberThumbnailFile && <span>{errors.memberThumbnailFile}</span>}
                        </div>
                        <button disabled={!(isValid && dirty)} type="submit">회원가입 완료</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Join;