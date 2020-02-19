import React from 'react';
import UserCard from '../UserCard/UserCard';
import './UsersComponent.css';
import '../Search/Search';
import Search from '../Search/Search';
import { useEffect } from 'react';
import { useState } from 'react';

const UsersComponent = (props) => {

    const { userArr, setUserArr } = props;

    const [arr, setArr] = useState([...userArr])
    // console.log(arr)

    useEffect(() => {
        console.log(userArr)
    })

    const handleRemoveUser = (indexOfUser) => {
        // return console.log(indexOfUser)
        return () => {
            const newArr = userArr.filter((_, i) => i !== indexOfUser);
            setUserArr(newArr);
        }
    }

    const handleSearchUsers = (e) => {
        let newUsersArr = userArr.filter((user => {
            let eTargetValue = e.target.value.toLowerCase();
            let userNameIncludes = user.name.toLowerCase().includes(eTargetValue);
            return userNameIncludes;
        }))
        setUserArr(newUsersArr);
    }

    return (
        <>
            <div className="wrapper">
                <div className="hold-search">
                    <Search onChange={handleSearchUsers}>Search</Search>
                </div>
                
                    {userArr.map((obj, i) => {
                        const generateKey = `UserCard${obj.name}`;
                        return <UserCard
                                    {...obj}
                                    index={i}
                                    key={generateKey}
                                    handleRemoveUser={handleRemoveUser(i)}
                                    setUserArr={setUserArr}
                        />
                    })}
            </div>
        </>
    )
}

export default UsersComponent