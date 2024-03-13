import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App'

import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

const App = () => {
  return (
    <>
     <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer/>} />
         
        </Routes>
      </Router>
    
    </>
   

  )
}

export default App;