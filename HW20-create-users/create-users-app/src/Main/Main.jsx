import React from 'react';
import './Main.css';
import { useState } from 'react';
import UsersComponent from '../UsersComponent';

const Main = (props) => {
    const { userArr, setUserArr } = props;

    const [valueName, setValueName] = useState('');
    const [valueSurname, setValueSurname] = useState('');
    const [valueAge, setValueAge] = useState('');

    const getValueName = (e) => {
        let value = e.target.value;
        setValueName(value);
    }
    const getValueSurname = (e) => {
        let value = e.target.value;
        setValueSurname(value);
    }
    const getValueAge = (e) => {
        let value = e.target.value;
        setValueAge(value);
    }

    const addUser = () => {
        const newArr = [...userArr];
        if (valueName === '' || valueSurname === '' || valueAge === '') {
            return false
        }
        const obj = {
            name: valueName,
            surname: valueSurname,
            age: valueAge
        }
        newArr.push(obj)
        setUserArr(newArr);
        setValueName('');
        setValueAge('');
        setValueSurname('');
    }

    return (
        <>
            <main>
                <div className="container">
                  <div className="hold-create-form">
                      <h3>Создать User</h3>
                    <div className="form">
                        <p>Введите имя:</p>
                        <input
                            type="text"
                            placeholder="name"
                            value={valueName}
                            onChange={getValueName}
                        />
                        <p>Введите фамилию:</p>
                        <input
                            type="text"
                            placeholder="surname"
                            value={valueSurname}
                            onChange={getValueSurname}
                        />
                        <p>Введите возраст:</p>
                        <input
                            type="text"
                            value={valueAge}
                            placeholder="age"
                            onChange={getValueAge}
                        />
                        <button className="btn" onClick={addUser} >Create User</button>
                    </div>
                </div>
                <UsersComponent userArr={userArr} setUserArr={setUserArr} />  
                </div>
            </main>
        </>
    )
}

export default Main;