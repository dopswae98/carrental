import React from 'react'
//import "@fortawesome/fontawesome-svg-core";
//import "fortawesome/fontawesome-free/css/all.min.css";
//import "@fortawesome/fontawesome-free";
import "font-awesome/css/font-awesome.min.css"; //actual link
//import "@fortawesome/free-brands-svg-icons";
//import "@fortawesome/react-fontawesome";
//import "react-icons";
import kin from '../images/computer-guy.jpg';

const HeroSection = () => {
  return (
    <div className='HeroSection container-md pt-5'>
        <div className='row'>
            <div className='col px-md-5 my-auto'>
                <div className="px-md-5">
                    <h1 className='fw-bold'>FullStack Developer</h1>
                    <p>Hi I'm Ephraim Matarutse. A passionate Fullstack Developer based
                        in Harare, <code>Zimbabwe</code> 
                    </p>
                    <div className='d-sm-block d-flex flex-row justify-content-center align-items-center'>
                        <span><i className="fa fa-linkedin fs-3" aria-hidden="true"></i></span>
                        <span><i className="fa fa-github mx-5 fs-3" aria-hidden="true"></i></span>
                        <span><i className="fa fa-whatsapp fs-3" aria-hidden="true"></i></span>
                        <span><i className="fa fa-twitter mx-5 fs-3" aria-hidden="true"></i></span>
                    </div>
                </div>
                
            </div>
            <div className='col col-right m-md-auto mt-3'>
                <div className='p-auto'>
                    <div className="img d-flex align-items-center justify-content-center mx-auto px-auto bg-none overflow-hidden border border-warning">
                        <img className='imeg img-fluid App-logo' src={kin} alt="me" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
