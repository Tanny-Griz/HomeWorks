import React from 'react';

const User = (props) => {

    const { user, setUserArr } = props;

    return (
        <div className="hold-card">
            <div className="card">
                <h3>Имя: {user.name}</h3>
                <p>Фамилия: {user.surname}</p>
                <p>Возраст: {user.age}</p>
            </div>
        </div>
    )
}

export default User