import { Field, Formik, Form } from "formik";
import * as Yup from 'yup';
import { login } from "../common/api/userApi";

function Login() {

    const handleSubmit = async (values, actions) => {
        login(values);
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