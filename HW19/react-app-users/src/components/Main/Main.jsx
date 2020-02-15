import React from 'react';
import UserCard from '../../components/UserCard';

const Main = (props) => {

    return (
        <main>
            <div className="container">
                {props.userArr.map(userObj => {
                    const generateKey = `UserCard${userObj._id}`;
                    return <UserCard user={userObj} key={generateKey}/>
                })}
            </div>
        </main>
    )
}

export default Main;