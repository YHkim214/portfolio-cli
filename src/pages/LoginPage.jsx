import { Formik } from "formik";
import * as Yup from 'yup';
import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import InputGroup from "../components/common/InputGroup";
import StyledForm from "../components/common/StyledForm";

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

    const formInfo = [
        {
            name: "memberName",
            title: "아이디",
            type: "text",
            placeholder: "아이디를 입력해 주세요"
        },
        {
            name: "memberPassword",
            title: "비밀번호",
            type: "password",
            placeholder: "비밀번호를 입력해 주세요"
        }
    ]

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
                    <StyledForm className="form-body" title="로그인">
                        {formInfo.map(info => <InputGroup errors={errors} touched={touched} {...info}/>)}
                        <Button width="100%" className="submit-btn" disabled={!(isValid && dirty)} type="submit">로그인</Button>
                    </StyledForm>
                )}
            </Formik>
    )
}

export default LoginPage;