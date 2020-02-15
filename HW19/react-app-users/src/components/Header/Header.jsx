import React from 'react';
import './Header.css';
import { userData } from '../../data/userData';
import Input from '../Input';
import Select from '../Select';

const Header = (props) => {
    const handleFilterByName = (e) => {
        const resulrArr = userData.filter(user => {
          let eTargetValue = e.target.value.toLowerCase();
          let nameIncludes = user.name.toLowerCase().includes(eTargetValue);
          return nameIncludes
        })
        props.setUserData(resulrArr)
      }
    
      const handleFilterByAge = (e) => {
        const sortedData = [...props.arr];
        if (e.target.value === '0') return props.setUserData(sortedData);
    
        sortedData.sort((a, b) => {
          if (a.age < b.age) return e.target.value === '1' ? -1 : 1
          if (a.age > b.age) return e.target.value === '1' ? 1 : -1
          if (a.age === b.age) return 0
        })
        props.setUserData(sortedData)
      }

    return (
        <header className="header">
            <div className="container">

                <Input onChange={handleFilterByName} />
                <Select onChange={handleFilterByAge} />

            </div>
        </header>
    )
}

export default Header