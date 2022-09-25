import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function APP() {
  return <BrowserRouter>
        
        <Routes>
            <Route path='/' element={<div>Home Page</div>}/>
        </Routes>
  
  
  </BrowserRouter>
}

export default APP