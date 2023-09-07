import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Login from './pages/login/login';
import Home from './pages/home/home';

function Rooter(){
  return(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/sign-in' element={<Login />} />
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

export default Rooter