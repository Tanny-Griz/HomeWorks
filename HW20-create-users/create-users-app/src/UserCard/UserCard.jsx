import React from 'react';
import './UserCard.css';
import Button from '../Button/Button';

const UserCard = (props) => {

    const { name, surname, age, handleRemoveUser } = props;

    return (
        <div className="hold-card">
            <div className="card">
                <h3>Имя: {name}</h3>
                <p>Фамилия: {surname}</p>
                <p>Возраст: {age}</p>
                <Button className="btn" onClick={handleRemoveUser}>Remove</Button>
            </div>
        </div>
    )
}

export default UserCard