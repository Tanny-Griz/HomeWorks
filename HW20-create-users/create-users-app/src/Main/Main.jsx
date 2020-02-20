import React from 'react';
import './Main.css';
import { useState } from 'react';
import UsersComponent from '../UsersComponent/UsersComponent';
import Input from '../Input/Input'
import { useEffect } from 'react';
import Button from '../Button/Button';

const Main = (props) => {
    const { userArr, setUserArr } = props;

    if(userArr) {
        let count = 0
        userArr.map(user => {
          user.id = user.name + count++
        })
    }

    const [form, setForm] = useState({
        name: '',
        surname: '',
        age: 0
    })

    useEffect(()=> {
        console.log(form);
    })

    const handleChange = e => {
        const {name, value} = e.target;
        const newForm = {...form, [name]: value};
        setForm(newForm);
    }

    const handleCreate = () => {
        let arr = [...userArr, form];
        setUserArr(arr);
        console.log(arr);
        
        localStorage.setItem('arrOfUsersLS', JSON.stringify(arr));

        setForm({
            name: '',
            surname: '',
            age: 0
        })
    }

    return (
        <>
            <main>
                <div className="container">
                  <div className="hold-create-form">
                      <h3>Создать User</h3>
                    <div className="form">
                        <p>Введите имя:</p>
                        <Input type="text"
                               value={form.name}
                               onChange={handleChange}
                               name="name"
                               placeholder="name" />

                        <p>Введите фамилию:</p>
                        <Input type="text"
                               value={form.surname}
                               onChange={handleChange}
                               name="surname"
                               placeholder="surname" />

                        <p>Введите возраст:</p>
                        <Input type="number"
                               value={form.age}
                               onChange={handleChange}
                               name="age"
                               placeholder="age" 
                               />

                        <Button className="btn" onClick={handleCreate}>Create User</Button>
                    </div>
                </div>
                <UsersComponent userArr={userArr} setUserArr={setUserArr} />  
                </div>
            </main>
        </>
    )
}

export default Main;