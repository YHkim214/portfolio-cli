import { Form, Field, ErrorMessage } from "../contexts/FormContext";

function Join() {

    const validate = (inputs) => {
        const errors = {
            memberName: '',
            memberPassword: '',
            memberPasswordVal: ''
        }

        if(!inputs.memberName) {
            errors.memberName = "아이디를 입력해주세요!";
        }

        if(!inputs.memberPassword) {
            errors.memberPassword = "패스워드를 입력해주세요!";
        }

        if(inputs.memberPassword !== inputs.memberPasswordVal) {
            errors.memberPasswordVal = "비밀번호와 동일한 값을 입력해주세요!";
        }

        return errors;
    }

    return (
        <>
            <Form 
                _initialValues={{memberName: '',
                    memberPassword: '',
                    memberPasswordVal: ''}}
                _validate={validate}
                _onSubmit={()=>{}}
            >
                <Field type="text" name="memberName" />
                <ErrorMessage name="memberName" />
                <Field type="password" name="memberPassword" />
                <ErrorMessage name="memberPassword" />
                <Field type="password" name="memberPasswordVal" />
                <ErrorMessage name="memberPasswordVal" />
                <button type="submit">회원가입</button>
            </Form>
        </>
    );
}

export default Join;