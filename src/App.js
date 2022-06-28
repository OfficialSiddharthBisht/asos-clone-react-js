import React from 'react';
import './App.css';
import Home from './components/Men/home';
import Footer  from './components/Footer/footer';
import {Bergpage} from './components/bergpage/bergpage'

function App() {
  return (
    <div className="App">
      <>
        <Home></Home>
        {/* <Bergpage /> */}
        <Footer/>
      </>
    </div>
  );
}

export default App;
