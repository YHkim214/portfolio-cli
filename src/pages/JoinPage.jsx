import { Formik, Form, Field } from "formik";
import * as Yup from 'yup'
import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";
import { ERROR_CODE_DUP_MEMBER, ERROR_MESSAGE_DUP_MEMBER } from "../common/constants/api";
import { useNavigate } from "react-router-dom";
import FormStyle from "../components/styled/form.styled";
import Button from "../components/Button";

function JoinPage() {
    const memberContext = useContext(MemberContext);
    const navigate = useNavigate();

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

    const submitHandler = async (values, actions) => {
        memberContext.register(values)
        .then((response) => {
            alert('회원가입 완료!');
            navigate('/login');
        })
        .catch((error) => {
            let response = error.response;
            if(response.data.header.code === ERROR_CODE_DUP_MEMBER) {
                actions.setFieldError('memberName', ERROR_MESSAGE_DUP_MEMBER);
            }
            actions.setSubmitting(false);
        })
    }

    return (
        <Formik
            initialValues={{
                memberName:'',
                memberNickName:'',
                memberPassword:'',
                memberPasswordVal:'',
                memberThumbnailFile: null
            }}
            validationSchema={JoinSchema}
            onSubmit={submitHandler}
        >
            {({errors, touched, isValid, dirty, setFieldValue}) => (
                <FormStyle>
                    <h1>회원가입</h1>
                    <Form className="form-body">
                        <div className="input-group">
                            <label htmlFor="memberName">아이디</label>
                            <Field id="memberName" name="memberName" type="text" placeholder="아이디를 입력해 주세요"/>
                            {errors.memberName && touched.memberName && <span>{errors.memberName}</span>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="memberNickName">닉네임</label>
                            <Field id="memberNickName" name="memberNickName" type="text" placeholder="닉네임을 입력해 주세요"/>
                            {errors.memberNickName && touched.memberNickName && <span>{errors.memberNickName}</span>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="memberPassword">비밀번호</label>
                            <Field id="memberPassword" name="memberPassword" type="password" placeholder="비밀번호를 입력해 주세요"/>
                            {errors.memberPassword && touched.memberPassword && <span>{errors.memberPassword}</span>}
                        </div>
                        <div className="input-group"> 
                            <label htmlFor="memberPasswordVal">비밀번호 확인</label>
                            <Field id="memberPasswordVal" name="memberPasswordVal" type="password" placeholder="비밀번호를 한번 더 입력해 주세요"/>
                            {errors.memberPasswordVal && touched.memberPasswordVal && <span>{errors.memberPasswordVal}</span>}
                        </div>
                        <div className="input-group">
                        <label htmlFor="memberThumbnail">섬네일</label>
                            <input id="memberThumbnailFile" name="memberThumbnailFile" onChange={(e) => {
                                const file = e.target.files[0];
                                setFieldValue('memberThumbnailFile', file);
                            }} type="file"/>
                            {errors.memberThumbnailFile && touched.memberThumbnailFile && <span>{errors.memberThumbnailFile}</span>}
                        </div>
                        <Button width="100%" className="submit-btn" disabled={!(isValid && dirty)} type="submit">회원가입 완료</Button>
                    </Form>
            </FormStyle>
            )}
        </Formik>
    );
}

export default JoinPage;