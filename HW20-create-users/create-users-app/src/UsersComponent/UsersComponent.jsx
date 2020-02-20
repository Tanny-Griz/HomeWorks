import React from 'react';
import UserCard from '../UserCard/UserCard';
import './UsersComponent.css';
import '../Search/Search';
import Search from '../Search/Search';
import { useEffect } from 'react';
import { useState } from 'react';

const UsersComponent = (props) => {

    const { userArr, setUserArr } = props;

    // const [ searchValue, setsearchValue ] = useState('');
    const [ filtredUsers, setfiltredUsers ] = useState([]);

    useEffect(() => {
        setfiltredUsers(userArr);
    }, [userArr]);

    const handleRemoveUser = (id) => {
        return () => {
            const newArr = userArr.filter(user => user.id !== id);
            localStorage.setItem('arrOfUsersLS', JSON.stringify(newArr));
            setUserArr(newArr);
            console.log(id);
        }
    }

    const handleSearchUsers = (e) => {
        let result = userArr.filter((user => {
            let eTargetValue = e.target.value.toLowerCase();
            let userNameIncludes = user.name.toLowerCase().includes(eTargetValue);
            return userNameIncludes;
        }))
        setfiltredUsers(result);
        console.log(result);
        // setsearchValue(value);
    }

    return (
        <>
            <div className="wrapper">
                <div className="hold-search">
                    <Search 
                        onChange={handleSearchUsers}>
                        Search
                    </Search>
                </div>
                
                    {filtredUsers.map((obj, i) => {
                        const generateKey = `UserCard${obj.name}`;
                        return <UserCard
                                    {...obj}
                                    index={i}
                                    key={generateKey}
                                    handleRemoveUser={handleRemoveUser(obj.id)}
                                    setUserArr={setUserArr}
                        />
                    })}
            </div>
        </>
    )
}

export default UsersComponent