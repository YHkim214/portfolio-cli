import { useContext } from "react";
import { MemberContext } from "../../../contexts/MemberContext";
import { Formik, Form, Field } from "formik";
import Button from "../../common/Button";
import * as Yup from 'yup';
import { axiosWrapperAuth } from "../../../common/configs/axiosConfig";
import { INSERT_BBS_API } from "../../../common/constants/api";

const BbsForm = ({...props}) => {
    const memberContext = useContext(MemberContext);
    
    const MAX_LENGTH = 200;

    const handleSubmit = (values, action) => {
        axiosWrapperAuth.post(INSERT_BBS_API, values)
        .then((response) => {
            action.setFieldValue("bbsContent", "");
            action.setSubmitting(false);
        })
        .catch((error) => {
            alert(error);
        })
    }

    const bbsSchema = Yup.object().shape({
        bbsContent: Yup.string()
        .required('내용을 입력해 주세요!')
        .max(200, `${MAX_LENGTH}자 이하로 입력해 주세요!`)
    });

    return (
            <Formik
                initialValues={{
                    bbsContent: "",
                    lsId: props.lsId,
                    parentId: props.parentId
                }}
                onSubmit={handleSubmit}
                validationSchema={bbsSchema}
            >
                {({isValid}) => (
                    <Form>
                        <Field id="bbsContent" name="bbsContent" as="textarea" disabled={!memberContext.isLoggedIn} placeholder={memberContext.isLoggedIn ? "중계내용을 입력해주세요." : "로그인 후 이용가능 합니다."}/>
                        <Button type="submit" disabled={!memberContext.isLoggedIn || !isValid}>보내기</Button>
                    </Form>
                )}
            </Formik>
    )
}

export default BbsForm;