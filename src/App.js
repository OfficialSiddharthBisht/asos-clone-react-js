import React from 'react';
import Navbar from "./components/Navbar";
import {AccountSign} from "./components/accountSign/AccountSign";
import {AccountJoin} from "./components/accountSign/AccountJoin"
import {Routes , Route} from "react-router-dom";
import Home from './components/Men/home';

function App() {
  return (
    <div>
         <Navbar />
         <Routes>
                <Route path = "/" elemnet = {<Home/>}></Route>
                <Route path = "/" elemnet = {<Navbar />}></Route>
                <Route path = "/accountSign/AccountSign" element = {<AccountSign />}></Route>
                <Route path = "/accountSign/AccountJoin" element = {<AccountJoin />}></Route>
                <Route path = "/" elemnet = {<Navbar />}></Route>
                <Route path = "/" elemnet = {<Navbar />}></Route>
                <Route path = "/" elemnet = {<Navbar />}></Route>
         </Routes>
    </div>
  );
}

export default App;
