import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

// import App from './App';
import Home from './pages/home/home';

function Rooter(){
  return(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

export default Rooter