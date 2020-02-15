import React, { useState } from 'react';
import './App.css';
import { userData } from './data/userData';
import Modal from './components/Modal'; //
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  // console.log(userData)
  const [userArr, setUserData] = useState([...userData]);
  const [modal, setModal] = useState({
    id: null,
    isShow: false,
  });

  return (
    <>
      <Header arr={userArr} setUserData={setUserData} />
      <Main userArr={userArr}/>
      {modal.isShow && <Modal user={userArr.find(u => u._id === modal.id)} setModal={setModal}/>}
    </>
  );
}

export default App;
