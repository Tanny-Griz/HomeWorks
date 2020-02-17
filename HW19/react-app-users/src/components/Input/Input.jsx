import React from 'react';
import './Input.css';

const Input = (props) => {

    const { onChange } = props;

    return (
        <input type="text" placeholder="enter name" id="inp" onChange={onChange} />
    )
}

export default Input