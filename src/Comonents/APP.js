import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';

function APP() {
  return <BrowserRouter>
        <Navbar/>
        <Home/>
        <Routes>
            <Route  path='Home' element={<div>Home Page</div>}/>
            <Route path='About' element={<div>About Me</div>}/>
            <Route path='Skills' element={<div>Skills</div>}/>
            <Route path='Education' element={<div>Education</div>}/>
            <Route path='WorkExp' element={<div>Experience</div>}/>
            <Route path='Contact' element={<div>Contact Me</div>}/>
            
        </Routes>
  
  
  </BrowserRouter>
}

export default APP