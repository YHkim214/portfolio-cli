import { Field, Formik, Form } from "formik";
import * as Yup from 'yup';
import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";
import { useNavigate } from "react-router-dom";
import FormStyle from "../components/styled/form.styled";
import Button from "../components/Button";

function LoginPage() {

    const memberContext = useContext(MemberContext);
    const navigate = useNavigate();

    const handleSubmit = (values, actions) => {
        memberContext.login(values)
        .then((response) => {
            alert('로그인 성공!');
            return memberContext.getMemberInfo();
        })
        .then((response) => {
            navigate('/');
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
            <Formik
                initialValues={{
                    memberName:'',
                    memberPassword:''
                }}
                onSubmit={handleSubmit}
                validationSchema={LoginSchema}
            >
               {({errors, touched, isValid, dirty}) => (
                    <FormStyle>
                        <h1>로그인</h1>
                        <Form className="form-body">
                            <div className="input-group">
                                <label htmlFor="memberName">아이디</label>
                                <Field id="memberName" name="memberName" type="text" placeholder="아이디를 입력해 주세요"/>
                                {errors.memberName && touched.memberName && <span>{errors.memberName}</span>}
                            </div>
                            <div className="input-group">
                                <label htmlFor="memberPassword">비밀번호</label>
                                <Field id="memberPassword" name="memberPassword" type="password" placeholder="비밀번호를 입력해 주세요"/>
                                {errors.memberPassword && touched.memberPassword && <span>{errors.memberPassword}</span>}
                            </div>
                            <Button width="100%" className="submit-btn" disabled={!(isValid && dirty)} type="submit">로그인</Button>
                        </Form>
                    </FormStyle>
                )}
            </Formik>
    )
}

export default LoginPage;