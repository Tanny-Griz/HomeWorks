import React from 'react';

const Search = (props) => {

    const { onChange, children } = props;

    return (
        <>
            <input type="text" onChange={onChange}/>{children}
        </>
    )
}

export default Search