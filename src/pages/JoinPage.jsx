import { Formik} from "formik";
import * as Yup from 'yup'
import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";
import { ERROR_CODE_DUP_MEMBER, ERROR_MESSAGE_DUP_MEMBER } from "../common/constants/api";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import InputGroup from "../components/common/InputGroup";
import StyledForm from "../components/common/StyledForm";

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

    const formInfo = [
        {
            name: "memberName",
            title: "아이디",
            type: "text",
            placeholder: "아이디를 입력해 주세요"
        },
        {
            name: "memberNickname",
            title: "닉네임",
            type: "text",
            placeholder: "닉네임을 입력해 주세요"
        },
        {
            name: "memberPassword",
            title: "비밀번호",
            type: "password",
            placeholder: "비밀번호를 입력해 주세요"
        },
        {
            name: "memberPasswordVal",
            title: "비밀번호 확인",
            type: "password",
            placeholder: "비밀번호 확인을 입력해 주세요"
        },
    ]

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
                <StyledForm className="form-body" title="회원가입">
                    {formInfo.map(info => <InputGroup errors={errors} touched={touched} {...info}/>)}
                    <div className="input-group">
                        <label htmlFor="memberThumbnail">섬네일</label>
                        <input id="memberThumbnailFile" name="memberThumbnailFile" onChange={(e) => {
                            const file = e.target.files[0];
                            setFieldValue('memberThumbnailFile', file);
                        }} type="file"/>
                        {/* {errors.memberThumbnailFile && touched.memberThumbnailFile && <span>{errors.memberThumbnailFile}</span>} */}
                    </div>
                    <Button width="100%" className="submit-btn" disabled={!(isValid && dirty)} type="submit">회원가입 완료</Button>
                </StyledForm>
            )}
        </Formik>
    );
}

export default JoinPage;