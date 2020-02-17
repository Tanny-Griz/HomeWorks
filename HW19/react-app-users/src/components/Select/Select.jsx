import React from 'react';
import { useState } from 'react';

const Select = (props) => {
    // внутренее состояние для селекта
    const [value, setValue] = useState(props.value || props.options[0].id);
    console.log(props)

    return (
        <select className="select" 
                onChange={ e => {
                    const { value } = e.target;
                    props.onChange(value);
                    setValue(value);
                }}
                id={props.id}
                value={value}
                >
            {props.options.map(opt => {
                return (
                    <option value={opt.id} key={opt.id+opt.name}>
                        {opt.name}
                    </option>
                )
            })}
        </select>
    )
}

export default Select