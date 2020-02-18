import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer'

function App() {

  const [userArr, setUserArr] = useState([]);

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
