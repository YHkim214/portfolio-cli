import { useState, useCallback, useEffect } from "react";

function useForm({_initialValues, _validate, _onSubmit}) {
    const [inputs, setInputs] = useState(_initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    
    const handleChange = (e) => {
        setInputs(
            {
                ...inputs,
                [e.target.name] : e.target.value
            }
        )
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setTouched(Object.keys(inputs).reduce((touched, field) => {
            touched[field] = true
            return touched
          }, {})
        )

        const errors = _validate(inputs);

        setErrors(errors);

        if(Object.values(errors).some(v => v)) {
            return;
        }

        _onSubmit(inputs);
    }

    const validate = useCallback(() => {_validate(inputs)}, [inputs]);

    useEffect(() => {setErrors(_validate(inputs))}, [validate])

    const handleBlur = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        })
    }

    const getFieldProps = name => {
        const value = inputs[name];
        const onBlur = handleBlur;
        const onChange = handleChange;

        return {
            name,
            value,
            onBlur,
            onChange
        }
    }

    return {
        inputs,
        errors,
        touched,
        handleChange,
        handleBlur,
        onSubmit,
        getFieldProps
    }
}

export default useForm;