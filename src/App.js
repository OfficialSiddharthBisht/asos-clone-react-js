import React from 'react';

import Navbar from "./components/Navbar";
import {Routes , Route} from "react-router-dom";

function App() {
  return (
    <div>
         <Navbar />
         <Routes>
                <Route path = "/" elemnet = {<Navbar />}></Route>
                <Route path = "/" elemnet = {<Navbar />}></Route>
                <Route path = "/" elemnet = {<Navbar />}></Route>
                <Route path = "/" elemnet = {<Navbar />}></Route>
                <Route path = "/" elemnet = {<Navbar />}></Route>
                <Route path = "/" elemnet = {<Navbar />}></Route>
                <Route path = "/" elemnet = {<Navbar />}></Route>
         </Routes>
    </div>
  );
}

export default App;
