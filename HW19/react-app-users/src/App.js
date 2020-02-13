import React, { useState } from 'react';
import './App.css';
import { userData } from './data/userData';
import UserCard from './components/UserCard';
import Modal from './components/Modal';

const App = () => {
  // console.log(userData)
  const [userArr, setUserData] = useState([...userData]);
  const [modal, setModal] = useState({
    id: null,
    isShow: false,
  });

  const handleFilterByName = (e) => {
    const resulrArr = userData.filter(user => {
      let eTargetValue = e.target.value.toLowerCase();
      let nameIncludes = user.name.toLowerCase().includes(eTargetValue);
      return nameIncludes
    })
    setUserData(resulrArr)
  }

  const handleFilterByAge = (e) => {
    const sortedData = [...userData];
    if (e.target.value === '0') return setUserData(sortedData);

    sortedData.sort((a, b) => {
      if (a.age < b.age) return e.target.value === '1' ? -1 : 1
      if (a.age > b.age) return e.target.value === '1' ? 1 : -1
      if (a.age === b.age) return 0
    })
    setUserData(sortedData)
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <input type="text" placeholder="enter name" id="inp" onChange={handleFilterByName} />
          <select className="select" onChange={handleFilterByAge}>
              <option value="0">Age</option>
              <option value="1">Ascending</option>
              <option value="2">Descending</option>
          </select>
        </div>
      </header>
      <main>
        <div className="container">
          {userArr.map(userObj => {
            const generateKey = `UserCard${userObj._id}`;
            return <UserCard user={userObj} key={generateKey} setModal={setModal}/>
          })}

        </div>
      </main>
        {modal.isShow && <Modal user={userArr.find(u => u._id === modal.id)} setModal={setModal}/>}
    </>
  );
}

export default App;
