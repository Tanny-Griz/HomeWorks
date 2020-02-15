import React from 'react';

const Select = (props) => {
    return (
        <select className="select" onChange={props.onChange}>
            <option value="0">Age</option>
            <option value="1">Ascending</option>
            <option value="2">Descending</option>
        </select>
    )
}

export default Select