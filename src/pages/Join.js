import { Formik, Form, Field } from "formik";
import * as Yup from 'yup'
import { registerMember } from "../common/api/userApi";

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

    const submitHandler = async (values, actions) => {
        registerMember(values, actions);
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
                    memberThumbnailFile: null
                }}
                validationSchema={JoinSchema}
                onSubmit={submitHandler}
            >
                {({errors, touched, isValid, dirty, setFieldValue}) => (
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