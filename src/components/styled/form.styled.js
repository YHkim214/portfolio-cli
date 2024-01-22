import styled from "styled-components";

const FormStyle = styled.div`
    width: 30%;
    border: 0;
    border-radius: 10px;
    margin: 30px auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    
    h1 {
        margin-bottom: 30px;
    }

    .form-body{
        padding: 25px;
        border: 1px solid #9f9fa3;
        border-radius: 5px;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-bottom: 20px;
    }

    .input-group > label {
        margin-bottom: 15px;
    }

    .input-group > span {
        display: inline-block;
        width: 90%;
        font-size: 10px;
        color: red;
        text-align: left;
        align-self: center;
    }

    .input-group > input {
        width: 90%;
        border: 0;
        border-radius: 5px;
        padding: 10px;
        background-color: #f3f4f7;
        align-self: center;
        margin-bottom: 10px;
    }
`;

export default FormStyle;