import FormStyle from "../styled/form.styled";
import { Form } from "formik";

const StyledForm = ({children, ...props}) => {
    return(
        <FormStyle>
            <h1>{props.title}</h1>
            <Form {...props}>{children}</Form>
        </FormStyle>
    )
}

export default StyledForm;