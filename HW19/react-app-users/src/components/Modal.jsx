import React from 'react';

const Modal = (props) => {
    const hendleHideModal = () => {
        props.setModal({id: null, isShow: false})
    }
    return (
        <div className="user-info">
            <div className="hold-modal">
                <div className="visual">
                    <img src={props.user.picture} alt="img"/>
                </div>
                <div className="text">
                    <h3>{props.user.name}</h3>
                    {Object.entries(props.user).map(([title, value]) => {
                        if(title == 'name') {
                            return false
                        }
                        if(title == 'friends') {
                            console.log(value)
                            value.map(elem => {
                                return <span className="info">{`${title} : ${elem.name}`}</span>
                            }) // не работает перебор друзей
                        }
                        if(title == '_id') {
                            return false
                        }
                        if(title == 'picture') {
                            return false
                        }
                        if(title == 'latitude') {
                            return false
                        }
                        if(title == 'longitude') {
                            return false
                        }
                        if(title == 'index') {
                            return false
                        }
                        return <span className="info">{`${title} : ${value}`}</span>
                    })}
                </div>
                <button className="hide" onClick={hendleHideModal}>Hide</button>
            </div>
        </div>
    )
}

export default Modal