import React from 'react';
import './Input.css';

const Input = (props) => {

    const { type, onChange, name, placeholder, value } = props;

    return (
        <input type={type}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            value={value}
        />
    )
    // почему ты меня злишь?
}

export default Input