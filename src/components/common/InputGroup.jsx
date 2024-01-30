import { Field } from "formik";

const InputGroup = ({...props}) => {
    return(
    <div className="input-group">
        <label htmlFor={props.name}>{props.title}</label>
        <Field id={props.name} name={props.name} type={props.type} placeholder={props.placeholder}/>
        {props.errors[props.name] && props.touched[props.name] && <span>{props.errors[props.name]}</span>}
    </div>
)
    
}

export default InputGroup;