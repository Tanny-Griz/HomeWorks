import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer'

function App() {

  const arrayOfUsersFromLS = JSON.parse(localStorage.getItem('arrOfUsersLS')) || [];

  const [userArr, setUserArr] = useState(arrayOfUsersFromLS);

  return (
      <>
        <Header />
        <Main userArr={userArr} 
        setUserArr={setUserArr} />
        <Footer userArr={userArr} />
      </>
  );
}

export default App;
