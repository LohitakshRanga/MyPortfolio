import React from 'react'
import "./About.css"
import mail from '../images/gmail.png'
import call from '../images/call.png'
import link from '../images/linkedin.png'
import git from '../images/github.png'



function About() {
  return (
    <>

      <div className="container">
        <div className="card-a">
          <h4>About</h4>
        </div>
        <p className='abt'>
          Hii,  My Name is Lohitaksh Ranga, here is my portfolio in which I  mentioned my skills and education which i think main objective of this portfolio so know little bit about me,
        </p>
        <ul>
          <li className='abt-1'>I'm optimistic.</li>
          <li className='abt-1'>I'm friendly with every people.</li>
          <li className='abt-1'>I never broke easily with work pressure if i broke, i wil bounce back very fast.</li>
          <li className='abt-1'>I have  fine catching ability.</li>
          <li className='abt-1'>I feel my strong point are a sense of Honesty and Integrity, Persistence and creativity and hard work.</li>
          <li className='abt-1'>I get stuck many times but I try my level best to get the answer.</li>
        </ul>
      </div>


      <div className="contact">

      <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNrcxFLTGKHFTqVrqrCTNgSxjbSzxgBqdlkpCBnCZrTdXjpWXRBdzfslZZmRFbNFgCvtFg" ><img className='mee M-mee' src={mail} alt="email"></img></a>
     
      <a href="tel:+7014874688" ><img className='mee M-mee' src={call} alt="call"></img></a>
     
      <a href="https://www.linkedin.com/in/lohitaksh-ranga-23a1b0202/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BcQ40K5pnSPuKYCh1i3V8YQ%3D%3D" ><img className='mee M-mee' src={link}></img></a>
     
     <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNrcxFLTGKHFTqVrqrCTNgSxjbSzxgBqdlkpCBnCZrTdXjpWXRBdzfslZZmRFbNFgCvtFg" ><img className='mee M-mee' src={git}></img></a>

      </div>


      <div className="breakdown"></div>
    </>
  )
}

export default About