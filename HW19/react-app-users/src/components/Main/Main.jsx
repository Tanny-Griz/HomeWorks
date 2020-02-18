import React from 'react';
import UserCard from '../../components/UserCard';

const Main = (props) => {

    const {setModalState, userArr} = props;
    
    return (
        <main>
            <div className="container">
                {userArr.map(userObj => {
                    const generateKey = `UserCard${userObj._id}`;
                    return <UserCard
                            user={userObj}
                            key={generateKey}
                            // передаем пропс в UserCard
                            setModalState={setModalState}
                            />
                })}
            </div>
        </main>
    )
}

export default Main;