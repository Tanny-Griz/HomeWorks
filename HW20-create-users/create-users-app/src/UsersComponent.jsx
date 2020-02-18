import React from 'react';
import User from './User'

const UsersComponent = (props) => {

    const { userArr, setUserArr } = props;

    // console.log(userArr);

    return (
        <>
            <div className="wrapper">
                    {userArr.map(obj => {
                        const generateKey = `UserCard${obj.name}`;
                        return <User
                            user={obj}
                            key={generateKey}
                            setUserArr={setUserArr}
                        />
                    })}
            </div>
        </>
    )
}

export default UsersComponent