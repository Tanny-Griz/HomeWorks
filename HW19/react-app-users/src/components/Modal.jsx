import React from 'react';
import { useEffect } from 'react';

const Modal = (props) => {
    // console.log(props.user)

    const { setModalState, modalState, userArr } = props;

    const user = userArr.find(u => u._id === modalState.id);

    useEffect(() => {
        console.log('Modal didMount' + user)
        return() => { // раб как willUnMount
            console.log('Modal destroyed' + user)
        }
    }, []);

    const hendleHideModal = () => {
        setModalState({id: null, isShow: false})
    }
    return (
        <div className="user-info">
            <div className="hold-modal">
                <div className="visual">
                    <img src={user.picture} alt="img"/>
                </div>
                <div className="text">
                    <h3>{user.name}</h3>
                    {Object.entries(user).map(([title, value]) => {
                        if(title == 'name') {
                            return false
                        }
                        if(title == 'friends') {
                            // console.log(value)
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