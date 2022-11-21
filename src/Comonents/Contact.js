import React from 'react'
import "./cntct.css"
import me from '../images/gmail.png'



function Contact() {
    return (
        <>
            <div className="container">

                <h2 className='heading'>Contact Me</h2>
                

                <div className='row'>
                    <div className='col-md-6 part-a'>
                        <div className='info-1'>

                        <h4>Call</h4>
                        <a href='tel:+7014874688'>7014874688</a>
                        {/* <p>7014874688</p> */}
                        </div>

                        <div className='info mail'>
                            
                        {/* <h4>E-Mail</h4> */}
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNrcxFLTGKHFTqVrqrCTNgSxjbSzxgBqdlkpCBnCZrTdXjpWXRBdzfslZZmRFbNFgCvtFg" ><img className='mee M-mee' src={me}></img></a>

                        {/* <p>bikanertalkies606@gmail.com</p> */}
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