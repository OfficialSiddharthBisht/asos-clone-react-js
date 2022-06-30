import React from 'react';
import './App.css';
import Women from './components/Women/Womenhome'
// import {MenPage} from './components/Men/MenPage';
import Footer  from './components/Footer/footer';
// import {Bergpage} from './components/bergpage/bergpage'

function App() {
  return (
    <div className="App">
      <>
      <Women></Women>
      {/* <MenPage/> */}
        {/* <Home></Home> */}
        {/* <Bergpage /> */}
        <Footer/>
      </>
    </div>
  );
}

export default App;
