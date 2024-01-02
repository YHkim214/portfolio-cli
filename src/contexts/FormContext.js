import { createContext, useContext } from "react";
import useForm from "../utils/useForm";

const FormContext = createContext({});
FormContext.displayName = "FormContext";

const Form = ({children, ...props}) => {
    const formValue = useForm(props);

    return(
        <FormContext.Provider value={formValue}>
            <form onSubmit={formValue.onSubmit}>{children}</form>
        </FormContext.Provider>
    )
}

const Field = props => {
    const {getFieldProps} = useContext(FormContext);
    return <input {...props} {...getFieldProps(props.name)}/>
}

const ErrorMessage = ({name}) => {
    const {touched, errors} = useContext(FormContext);
    if (!touched[name] || !errors[name]) {
        return null
    }
    return <span>{errors[name]}</span>
}

export {Form, Field, ErrorMessage}