import React from 'react';
import './Footer.css';

const Footer = (props) => {

    const { userArr } = props;

    return (
        <footer>
            <p>Количество созданных юзеров: {userArr.length}</p>
        </footer>
    );

}

export default Footer;