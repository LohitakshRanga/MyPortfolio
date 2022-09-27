import React from 'react'
import './wrkexp.css'
import images from '../images/dunes.png';
import crsl1 from '../images/src-1.png';
import crsl2 from '../images/src-2.png';
import crsl3 from '../images/src-3.png';
import crsl4 from '../images/src-4.png';
import dshbrd from '../images/Dashboard.png';

function WorkExp() {
  return (
    <>
      <div className="container">
        <div className="card-header card-1">
          <h4> Work Experinence </h4>
        </div>
        <div className="card">
          <div className="card-body">
            <img src={images}></img>

            <h5 className="card-title">Dunes Factory Pvt. Ltd.</h5>
            <p className="card-text">Dur. : Dec 2021 - Feb 2022 <br />Post : Graphic Designer </p>
            <a href="https://dunesfactory.com/" target="blank" className="btn btn-dark">Go Dunes Factory</a>
          </div>
        </div>


        {/* .......................................Projects............................................ */}

        {/* ///////////// KonnectHo Wesite /////////////// */}

        <div className="card-a">
          <h4>Projects</h4>
        </div>

        <div className="card-a">
          <h4>First</h4>
        </div>
        <h5 className="head">I made an introductry website of an app called KonnectHo. It was an ordering app, from where you can order any thing from local store who is registered on this app. by using this app they can utilize that time in some other important work which they have to waste in line on that store. This app have some other feature like invoice managment, inquery system,  chat-bot, for future we have online payment feature, delivery service and many more. </h5>

        <h5 className="txt1"> I made this on React JS by using Html, CSS and JS</h5>

        <h5 className="txt1"> Some Pics of that site.</h5>

        <div className="container up M-up">
          <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
            <div class="carousel-inner">
              <div class="carousel-item active crl">
                <img src={crsl1} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item crl">
                <img src={crsl2} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item crl">
                <img src={crsl3} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item crl">
                <img src={crsl4} class="d-block w-100" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev M-prv " type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span class="carousel-control-prev-icon prv " aria-hidden="true"></span>
              <span class="visually-hidden ">Previous</span>
            </button>
            <button class="carousel-control-next M-nxt" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>




        </div>

        {/* ////////////////////// Design of KonnectHo App ////////////////// */}

        <div className="card-a">
          <h4>Second</h4>
        </div>

        <h4 className="head IInd"> Here is design of Dashboard for KonnectHo App Which designed by me. </h4>

        <img src={dshbrd} className="dsbrd M-dsbrd"></img>


      </div>
    </>
  )
}

export default WorkExp