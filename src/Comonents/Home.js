import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom";
import me from '../images/img-1.png'

function Home() {
    return (
        <>
            

                <div className="row">
                    <div className="container col-md-6 part-1 M-prt1">
                        {/* <img className='mee M-mee' src={me}></img> */}
                    </div>
                    <div className="container col-md-6 part-2 M-prt2">
                        <div className="container-fluid txt M-txt ">
                            <p className='txt-2'>Hi There,</p>
                            <p className='txt-2'> My name is Lohitaksh Ranga.</p>
                            <h4>I'm into &lt; Web Devloment/&gt;.</h4>

                            <button class="button button1"><Link class="nav-link active" to="/about">About</Link></button>

                        </div>

                    </div>
                </div>
        
        </>
    )
}

export default Home