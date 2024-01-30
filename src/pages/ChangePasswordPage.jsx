import { Formik } from "formik";
import * as Yup from 'yup'
import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import InputGroup from "../components/common/InputGroup";
import StyledForm from "../components/common/StyledForm";
import { LOGIN } from "../common/constants/navigation";

function ChangePasswordPage() {
    const memberContext = useContext(MemberContext);
    const navigate = useNavigate();

    const ChangePasswordSchema = Yup.object().shape({
        prevPassword: Yup.string()
        .required('기존 비밀번호를 입력해 주세요'),
        newPassword: Yup.string()
        .required('새 비밀번호를 입력해 주세요'),
        newPasswordVal: Yup.string()
        .required('새 비밀번호 확인을 입력해 주세요')
        .oneOf([Yup.ref('newPassword'), null], '새 비밀번호와 동일한 값을 입력해 주세요')
    })

    const submitHandler = async (values, actions) => {
        memberContext.changePassword(values)
        .then(response => {
            alert('비밀번호 변경에 성공했습니다. 다시 로그인 해주세요!');
            memberContext.logout();
            navigate(LOGIN);
        })
        .catch(error => {
            console.log(error);
            alert(error.response?.data?.header?.message);
        })
    }

    const formInfo = [
        {
            name: "prevPassword",
            title: "기존 비밀번호",
            type: "password",
            placeholder: "기존 비밀번호를 입력해 주세요"
        },
        {
            name: "newPassword",
            title: "새 비밀번호",
            type: "password",
            placeholder: "새 비밀번호를 입력해 주세요"
        },
        {
            name: "newPasswordVal",
            title: "새 비밀번호 확인",
            type: "password",
            placeholder: "새 비밀번호 확인을 입력해 주세요"
        }
    ]

    return (
        <Formik
            initialValues={{
                prevPassword:'',
                newPassword:'',
                newPasswordVal:''
            }}
            validationSchema={ChangePasswordSchema}
            onSubmit={submitHandler}
        >
            {({errors, touched, isValid, dirty}) => (
                <StyledForm className="form-body" title="비밀번호 변경">
                    {formInfo.map(info => <InputGroup errors={errors} touched={touched} {...info}/>)}
                    <Button width="100%" className="submit-btn" disabled={!(isValid && dirty)} type="submit">변경</Button>
                </StyledForm>
            )}
        </Formik>
    );
}

export default ChangePasswordPage;