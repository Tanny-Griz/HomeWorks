import React from 'react';

const UserCard = (props) => {

    const { user, setModalState } = props;

    const hendleOpenModal = (id) => {
        setModalState({id, isShow: true})
    }

    return (
        <div className="hold-card">
            <div className="card">
                <div className="visual">
                    <img src={user.picture} alt=""/>
                </div>
                <div className="text">
                    <h3>{user.name}</h3>
                    <p>Age: {user.age}</p>
                    <span>Sex: {user.gender}</span>
                    <p><em>Balance: {user.balance}</em></p>
                    <button onClick={() => hendleOpenModal(user._id)}>Show info</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard