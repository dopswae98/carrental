import React, { useState } from "react";
import "./portifolio.css";
import CV from "../assets/CV.pdf";

const ContactPage = () => {
  const [selected, setSelected] = useState(true);
  return (
    <div className="portifolio container-fluid vh-100">
      <section className="nav-section-top pt-2">
        <nav class="navbar navbar-expand-lg navbar-light text-white">
          <div class="container-fluid">
            <a class="logo navbar-brand fw-bold" href="#">
              <i class="fa fa-search    "></i>
            </a>
            {/* <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="cv-button" id="navbarSupportedContent">
              <button className="btn btn-outline-dark ms-auto" download>
                <a className="cv" href={CV} download>
                  Download CV
                </a>
              </button>
              {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>
      </section>
      <section className="nav-section fw-bold mt-5 d-flex flex-column flex-md-row flex-warp">
        <div className="row text-center text-md-start">
          <div className="col-md-6 px-4">
            <h1 className="h1 ms-md-3">
              Have a great idea or concept that really excites you? what do you
              say? Let's make magic together.
            </h1>
          </div>
          <div className="col-md-6 mt-4 mt-md-1">
            <p className="m-0">Email:</p>
            <h5>
              <a href="mailto:ephraimmatarutse@gmail.com">
                {" "}
                ephraimmatarutse@gmail.com
              </a>
            </h5>
            <p className="m-0 pt-2">Phone:</p>
            <h5>
              <a href="tel:+263773373786"> +263773373786</a>
            </h5>
            <div className="social fs-5 d-flex align-items-center align-items-md-start justify-content-center justify-content-md-start text-center pt-3">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-github"></i>
              <i className="fa fa-linkedin"></i>
              <i className="fa fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="nav-section-bottom mt-5">
        <nav className="navbar-light">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <ul className="nav-list list-unstyled d-flex align-items-center justify-content-around my-auto p-1  bg-light rounded  border border-dark border-bottom-0 border-start-none">
                <li className="">Home</li>
                <li className="">Projects</li>
                <li className="">About</li>
                <li className={`${selected} && nav-list-selected`}>Contact</li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default ContactPage;
