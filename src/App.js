import React from 'react';
import './App.css';
import Home from './components/Men/home'
import {MenPage} from './components/Men/MenPage';
import Footer  from './components/Footer/footer';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Products' element={<MenPage/>}></Route>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
