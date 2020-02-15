import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <input type="text" placeholder="enter name" id="inp" onChange={props.onChange} />
    )
}

export default Input