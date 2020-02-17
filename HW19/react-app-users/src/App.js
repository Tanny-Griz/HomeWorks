import React, { useState } from 'react';
import './App.css';
import { userData } from './data/userData';
import Modal from './components/Modal'; //
import Header from './components/Header';
import Main from './components/Main';
import ModalSize from './components/ModalSize';

const App = () => {
  // console.log(userData)
  const [userArr, setUserData] = useState([...userData]);
  const [modalState, setModalState] = useState({
    id: null,
    isShow: false,
  });

  const [modalSizeState, setModalSizeState] = useState({
    isShow: false
  })

  return (
    <>
      <Header userArr={userArr} setUserData={setUserData} userData={userData} setModalSizeState={setModalSizeState} />
      <Main userArr={userArr} setModalState={setModalState}/>
      {modalState.isShow && <Modal userArr={userArr} modalState={modalState} setModalState={setModalState}/>}
      {modalSizeState.isShow && <ModalSize setModalSizeState={setModalSizeState}/>}
    </>
  );
}

export default App;
