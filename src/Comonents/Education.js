import React from 'react'
import "./edu.css"


function Education() {
    return (
        <>
            <div className="container">

                <div className="card-a">
                <h4>Education</h4>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h5>Schooling</h5>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Secondary Class</h5>
                        <p className="card-text">Year : 2014-15<br />From : S.D.P Senior Secondary School <br /> Board : RBSE <br /> Percentage : 58% </p>
                        {/* <a href="#" className="btn btn-dark">Go somewhere</a> */}
                    </div>
                    <ul className='disc'>

                        <li><hr class="dropdown-divider" /></li>
                    </ul>

                    <div className="card-body">
                        <h5 className="card-title">Senior Secondary Class</h5>
                        <p className="card-text">Year : 2016-17<br />From : N.D. Modern Senior Secondary School <br /> Board : RBSE <br /> Percentage : 59% </p>
                        {/* <a href="#" className="btn btn-dark">Go somewhere</a> */}
                    </div>

                </div>


                <div className="card">
                    <div className="card-header">
                    <h5>College</h5>
                    </div>
                    <div className="card-body">
                        {/* <h5 className="card-title">Higher Studies</h5> */}
                        <p className="card-text">Year : 2017-23<br />From : U.C.E.T College <br /> University : RTU <br /> Percentage : ~60% </p>
                        {/* <a href="#" className="btn btn-dark">Go somewhere</a> */}
                    </div>
                </div>


                <div className="card">
                    <div className="card-header">
                    <h5>Other Certificates</h5>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">RKCL</h5>
                        <p className="card-text">Year : 2019<br />From : R.N. Comuter Centre <br /> Percentage : 73% </p>
                        {/* <a href="#" className="btn btn-dark">Go somewhere</a> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Education