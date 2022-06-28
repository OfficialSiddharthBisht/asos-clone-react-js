import React from 'react';
import { Route, Routes } from 'react-router';

import { Productdetails } from './components/proddesc';

function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path="/products/:productid" element={<Productdetails />}> </Route>
     </Routes>
     
    </div>
  );
}

export default App;
