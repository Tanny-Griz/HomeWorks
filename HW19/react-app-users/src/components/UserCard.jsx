import React from 'react';

const UserCard = (props) => {

    const hendleOpenModal = (id) => {
        props.setModal({id, isShow: true})
    }

    return (
        <div className="hold-card">
            <div className="card" onClick={() => hendleOpenModal(props.user._id)}>
                <div className="visual">
                    {/* <img src="https://cdn2.iconfinder.com/data/icons/green-2/32/expand-color-web2-23-128.png" alt="img"/> */}
                    <img src={props.user.picture} alt=""/>
                </div>
                <div className="text">
                    <h3>{props.user.name}</h3>
                    <p>Age: {props.user.age}</p>
                    <span>Sex: {props.user.gender}</span>
                    <p><em>Balance: {props.user.balance}</em></p>
                </div>
            </div>
        </div>
    )
}

export default UserCard