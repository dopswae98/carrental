import React, { useState } from "react";
import "./portifolio.css";
import CV from "../assets/CV.pdf";
//import TheNavbar from "../components/TheNavbar";

const Portifolio = () => {
  const [selected] = useState(true);
  return (
    <div className="portifolio container-fluid vh-100">
      <section className="nav-section-top pt-2">
        <nav class="navbar navbar-expand-lg navbar-light text-white">
          <div class="container-fluid">
            <a class="logo navbar-brand fw-bold" href="/#">
              <i class="fa fa-search"></i>
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
      <section className="nav-section text-center fw-bold my-5">
        <h1 className="h1">
          Hi, I'm Ephraim <br className="d-md-none d-block " /> Matarutse <br />
          a software developer
        </h1>
        <p className="mt-md-0 mt-3">
          I build scalable and reliable web and mobile applications{" "}
          <br className="d-md-block d-none " />
          from stable back-end to front-end designs that work
        </p>
      </section>
      <section className="nav-section-bottom mt-5">
        <nav className="navbar-light">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <ul className="nav-list list-unstyled d-flex align-items-center justify-content-around my-auto p-1  bg-light rounded  border border-dark border-bottom-0 border-start-none">
                <li className={`${selected} && nav-list-selected`}>Home</li>
                <li className="">Projects</li>
                <li className="">About</li>
                <li className="">Contact</li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="nav-section pt-5">
        <nav class="navbar navbar-expand-lg navbar-muted text-dark">
          <div class="container-fluid">
            <a class="logos navbar-brand fw-bold text-dark" href="/#">
              ephraim.Dev
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-dark">
                <li class="nav-item">
                  <a
                    class="nav-link active fw-bold"
                    aria-current="page"
                    href="/#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold active" href="/#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold active" href="/#">
                    Projects
                  </a>
                </li>
                <li class="nav-item dropdown"></li>
                <li class="nav-item">
                  <a class="nav-link fw-bold active" href="/#" tabindex="-1">
                    Contact
                  </a>
                </li>
              </ul>
              {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>
      </section>
      <section className="about vh-100 my-5">
        <div className="case pt-5">
          <div className="row bg-primary">
            <div className="col-md-8 mx-auto">
              <div className="row mx-auto bg-warning">
                <div className="laptop col-md-6 bg-secondary">
                  <p>sdsd</p>
                  <div className="circle d-flex align-items-center">
                    <p className="">Front-End Developer</p>
                  </div>
                </div>
                <div className="col-md-6 bg-light py-3">
                  <h6>ABOUT ME</h6>
                  <h5>
                    A dedicated Front-end Developer <br />
                    based in Harare Zimbabwe.
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi iusto, perferendis veniam cupiditate esse earum
                    dolores optio soluta maiores blanditiis cumque laudantium.
                    Ipsa vel harum corporis aut consequatur illo delectus
                    tempora quod. Maxime expedita vitae error culpa deleniti
                    esse accusamus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="nav-section"></section>
      <section className="Portifolio container vh-100 my-5">
        <h6 className="primary">PORTIFOLIO</h6>
        <h5>Each Project is a unique piece of development</h5>
        <div className="case pt-3">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row mx-auto">
                <div className="laptop col-md-6 bg-secondary rounded">
                  <p>sdsd</p>
                </div>
                <div className="col-md-6  py-3">
                  <h6>ABOUT ME</h6>
                  <h5>
                    A dedicated Front-end Developer <br />
                    based in Harare Zimbabwe.
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi iusto, perferendis veniam cupiditate esse earum
                    dolores optio soluta maiores blanditiis cumque laudantium.
                    Ipsa vel harum corporis aut consequatur illo delectus
                    tempora quod. Maxime expedita vitae error culpa deleniti
                    esse accusamus.
                  </p>
                </div>
              </div>
              <div className="row mx-auto pt-4 my-3">
                <div className="col-md-6 text-center py-3">
                  <h6>ABOUT ME</h6>
                  <h5>
                    A dedicated Front-end Developer <br />
                    based in Harare Zimbabwe.
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi iusto, blanditiis cumque laudantium. Ipsa vel harum
                    corporis aut consequatur illo delectus tempora quod. Maxime
                    expedita vitae error culpa deleniti esse accusamus.
                  </p>
                  <div className="languages d-flex align-items-center justify-content-around">
                    <h6 className=" fw-bold">React</h6>
                    <h6 className="fw-bold">SCSS</h6>
                  </div>
                  <div className="languages mt-4 d-flex align-items-center justify-content-around">
                    <h6>
                      Code <i className="fa fa-github ms-2 fs-5"></i>
                    </h6>
                    <h6>
                      Live Demo <i className="fa fa-github ms-2 fs-5"></i>
                    </h6>
                  </div>
                </div>
                <div className="laptop col-md-6 rounded">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact container vh-100 py-5">
        <div className="contactme mt-5">
          <h6 className="primary">CONTACT</h6>
          <h5>Don't be shy hit me up!</h5>
        </div>
        <div className="locations mt-5">
          <div className="d-flexs align-item-centers justify-content-arounds">
            <div className="d-flex justify-content-around align-items-center">
              <div className="location d-flex align-item-center justify-content-center">
                <i className="fa fa-github text-dark fs-1 me-2"></i>
                <div>
                  <h6>
                    Location <br />
                    Harare, Zimbabwe
                  </h6>
                </div>
              </div>
              <div className="location d-flex align-item-center justify-content-center">
                <i className="fa fa-github text-dark fs-1 me-2"></i>
                <div>
                  <h6>
                    Mail <br />
                    ephraimmatarutse@gmail.com
                  </h6>
                </div>
              </div>
            </div>
            <div className="mail"></div>
          </div>
        </div>
        <div className="footer bg-dark text-white">
          <div className="d-flex align-items-center justify-content-around py-3">
            <h6 className="fw-bold">Copyright &. All rights reserved </h6>
            <div className="icons">
              <i className="fa fa-linkedin me-4 text-white"></i>
              <i className="fa fa-github me-4 text-white"></i>
              <i className="fa fa-facebook text-white"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portifolio;
