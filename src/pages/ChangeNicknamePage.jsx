import { Formik } from "formik";
import * as Yup from 'yup';
import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { HOME } from "../common/constants/navigation";
import InputGroup from "../components/common/InputGroup";
import StyledForm from "../components/common/StyledForm";

function ChangeNicknamePage() {
    const memberContext = useContext(MemberContext);
    const navigate = useNavigate();

    const handleSubmit = (values, actions) => {
        console.log(111);

        memberContext.changeNickname(values)
        .then((response) => {
            alert('닉네임이 변경되었습니다!');
            navigate(HOME);
        })
        .catch((error) => {
            alert(error);
        });
    };

    const changeNicknameSchema = Yup.object().shape({
        newNickname: Yup.string()
        .required('닉네임을 입력해 주세요!')
    });

    const formInfo = [
        {
            name: "newNickname",
            title: "새 닉네임",
            type: "text",
            placeholder: "변경할 닉네임을 입력해 주세요"
        }
    ]

    return(
            <Formik
                initialValues={{
                    newNickname: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={changeNicknameSchema}
            >
               {({errors, touched, isValid, dirty}) => (
                    <StyledForm className="form-body" title="닉네임 변경">
                        {formInfo.map(info => <InputGroup errors={errors} touched={touched} {...info}/>)}
                        <Button width="100%" className="submit-btn" disabled={!(isValid && dirty)} type="submit">변경</Button>
                    </StyledForm>
                )}
            </Formik>
    )
}

export default ChangeNicknamePage;