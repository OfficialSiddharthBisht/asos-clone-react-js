import React from 'react';
import { Route, Routes } from 'react-router';
import { Cartdisplay } from './components/cartpage/cartdisplay';

import { Productdetails } from './components/descriptionpage/proddesc';

function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path="/products/:productid" element={<Productdetails />}> </Route>
      <Route path="/cart" element={<Cartdisplay />}> </Route>
     </Routes>
     
    </div>
  );
}

export default App;
