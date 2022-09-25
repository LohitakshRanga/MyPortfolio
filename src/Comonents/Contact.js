import React from 'react'
import "./cntct.css"



function Contact() {
    return (
        <>
            <div className="container">

                <h2 className='heading'>Contact Me</h2>
                

                <div className='row'>
                    <div className='col-md-6 part-a'>
                        <div className='info-1'>

                        <h4>Call</h4>
                        <p>7014874688</p>
                        </div>

                        <div className='info'>
                            
                        <h4>E-Mail</h4>
                        <p>bikanertalkies606@gmail.com</p>
                        </div>

                        <div className='info'>

                        <h4>Address</h4>
                        <p>Outside Nathusar Gate, Infront of Baba Ramdev Park, Bikaner (Raj.)</p>
                        </div>

                    </div>
                    <div className='col-md-6 part-b'></div>

                    

                </div>
            </div>
        </>
    )
}

export default Contact