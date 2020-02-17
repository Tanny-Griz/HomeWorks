import React, { useState, useEffect } from 'react';
import './Header.css';
import Input from '../Input';
import Select from '../Select';
import { sortSelectData } from '../../data/navigationData';
import Button from '../Button';

const Header = (props) => {

    const handleFilterByName = (e) => {
        const resulrArr = props.userData.filter(user => {
          let eTargetValue = e.target.value.toLowerCase();
          let nameIncludes = user.name.toLowerCase().includes(eTargetValue);
          return nameIncludes
        })
        props.setUserData(resulrArr)
      }
    
    const handleFilterByAge = value => {
      // const {value} = e.target;
      const sortedArr = [...props.userArr];
      if (value === '0') return props.setUserData(props.userData);
    
      sortedArr.sort((a, b) => {
        if (a.age < b.age) return value === '1' ? -1 : 1
        if (a.age > b.age) return value === '1' ? 1 : -1
        if (a.age === b.age) return 0
      })
      props.setUserData(sortedArr);
    }

    return (
        <header className="header">
            <div className="container">

                <Input onChange={handleFilterByName} />
                <Select
                onChange={handleFilterByAge} 
                options={sortSelectData} />
                <Button>size</Button>
            </div>
        </header>
    )
}

export default Header