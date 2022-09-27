import './App.css';
import About from './Comonents/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Comonents/Home';
import Navbar from './Comonents/Navbar';
import Skills from './Comonents/Skills';
import Education from './Comonents/Education';
import WorkExp from './Comonents/WorkExp';
import Contact from './Comonents/Contact';
// import Carasoul from './Comonents/Carasoul';



function App() {
  return<BrowserRouter>
      <Navbar/>
  <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='Home' exact element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='skills' element={<Skills/>}/>
    <Route path='education' element={<Education/>}/>
    <Route path='workexp' element={<WorkExp/>}/>
    <Route path='contact' element={<Contact/>}/>
    {/* <Route path='carasol' element={<Carasoul/>}/> */}
    
    
  </Routes>

    
    

  </BrowserRouter>
  

}

export default App;
