import { Field, Formik, Form } from "formik";
import * as Yup from 'yup';
import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

function Login() {

    const memberContext = useContext(MemberContext);
    const navigate = useNavigate();

    const handleSubmit = (values, actions) => {
        memberContext.login(values)
        .then((response) => {
            alert('로그인 성공!');
            return memberContext.getMemberInfo();
        })
        .then((response) => {
            if(response instanceof AxiosError) {
                if(response.response.status === 401) {
                    alert('로그인이 만료되었습니다. 다시 로그인 해주세요');
                    memberContext.logout();
                    navigate('/login');
                }
            } else {
                navigate('/');
            }
        })
        .catch((error) => {
            alert('로그인 실패!');
            actions.setSubmitting(false);
        })
    };

    const LoginSchema = Yup.object().shape({
        memberName: Yup.string()
        .required('아이디를 입력해 주세요'),
        memberPassword: Yup.string()
        .required('비밀번호를 입력해 주세요')
    });

    return(
        <>
            <div>로그인</div>
            <Formik
                initialValues={{
                    memberName:'',
                    memberPassword:''
                }}
                onSubmit={handleSubmit}
                validationSchema={LoginSchema}
            >
               {({errors, touched, isValid, dirty}) => (
                    <Form>
                        <div>
                            <label htmlFor="memberName">아이디</label>
                            <Field id="memberName" name="memberName" type="text" placeholder="아이디를 입력해 주세요"/>
                            {errors.memberName && touched.memberName && <span>{errors.memberName}</span>}
                        </div>
                        <div>
                            <label htmlFor="memberPassword">비밀번호</label>
                            <Field id="memberPassword" name="memberPassword" type="password" placeholder="비밀번호를 입력해 주세요"/>
                            {errors.memberPassword && touched.memberPassword && <span>{errors.memberPassword}</span>}
                        </div>
                        <button disabled={!(isValid && dirty)} type="submit">로그인</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default Login