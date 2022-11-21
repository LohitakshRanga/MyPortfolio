import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light sticky-top ">
  <div class="container-fluid">
    <a class="navbar-brand mName" href="#">Lohitaksh</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nvbr" id="navbarNav">
      <ul class="navbar-nav items M-itm">
        <li class="nav-item items-2">
            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        {/* <li class="nav-item items-2">
        <Link class="nav-link active" to="/about">About</Link>
        </li> */}
        <li class="nav-item items-2">
          
          <Link class="nav-link active" to="/skills">Skills</Link>
        </li>
        {/* <li class="nav-item items-2">
          
          <Link class="nav-link active" to="/education">Education</Link>
        </li> */}
        <li class="nav-item items-2">
          
          <Link class="nav-link active" to="/WorkExp">Experience</Link>
        </li>
        {/* <li class="nav-item items-2">
          
          <Link class="nav-link active" to="/contact">Contact</Link>
        </li> */}
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar