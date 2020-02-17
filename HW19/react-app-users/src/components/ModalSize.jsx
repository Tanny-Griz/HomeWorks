import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ModalSize = (props) => {

    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    const { setModalSizeState } = props;

    const hendleHideModalSize = () => {
        setModalSizeState({isShow: false})
    }

    const handleResize = () => {
        console.log(window.innerWidth)
        setSize(window.innerWidth)
    }

    return (
        <>
        <div className="user-info">
            <p className="size">{size > 768 ? 'Desktop' : 'Mobile'}</p>
            <p className="size">{size}</p>
            <button className="hide" onClick={hendleHideModalSize}>Hide</button>
        </div>
        </>
    )
}

export default ModalSize