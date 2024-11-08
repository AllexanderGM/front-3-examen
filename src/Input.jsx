import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, type, value, name, handlerInput, errorMessage }) => {
    return (
        <label>
            {label}:
            <input onChange={handlerInput} type={type} name={name} value={value} />
            <span>{errorMessage.error}</span>
        </label>
    );
};

Input.propTypes = {
    value: PropTypes.object.isRequired,
    errorMessage: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handlerInput: PropTypes.func,
};

export default Input;
