import React, { useState } from "react";
import pizza from "../images/computer-guy.jpg";
import carwhite1 from "../images/carwhite1.png";
import carwhite2 from "../images/caryellow2.png";
import carred1 from "../images/carred1.png";
// import carwhite3 from "../images/carbrown1.png";
import products from "../assets/data/products";
// import img1 from '../assets/images/'
import "./carrental.css";

const CarRental = () => {
  const [selected, setSelected] = useState({ ...products[0] });
  const [email, setEmail] = useState("");
  return (
    <div className="container mb-5">
      <section className="nav-section">
        <nav className="navbar navbar-expand-lg navbar-muted text-dark">
          <div className="container-fluid">
            <a className="logos navbar-brand fw-bold text-dark" href="/#">
              <span
                style={{
                  lineHeight: 0.5,
                }}
              >
                <i className="fa fa-car text-danger me-2"></i>
                <span className="fs-6"> Car</span>
                <p
                  className="m-0 p-0"
                  style={{ backgroundColor: "rgba(220, 53, 69, 0.5)" }}
                >
                  Rental
                </p>
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-dark">
                <li className="nav-item">
                  <a
                    className="nav-link active fw-bold text-dark"
                    aria-current="page"
                    href="/#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold active text-dark" href="/#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold active text-dark" href="/#">
                    Vehicle Models
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold active text-dark" href="/#">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold active text-dark" href="/#">
                    Our Team
                  </a>
                </li>
                <li className="nav-item dropdown"></li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-bold active text-dark"
                    href="/#"
                    tabIndex="-1"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="buttons ms-auto">
                <button className="btn btn-transparent rounded-0 me-2 fw-bold">
                  Sign In
                </button>
                <button className="btn btn-danger text-white rounded-0 fw-bold">
                  Register
                </button>
              </div>
              {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>
      </section>
      <section className="hero pt-0 pt-md-2">
        <div className="pt-4 pt-md-5">
          <div className="row">
            <div className="col-md-5">
              <h6 className="fw-bold">Plan your trip now</h6>
              <h1 className="h1 fw-bold">
                Save <span className="text-danger">Big</span> with our car
                rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable Prices, Unlimited miles
                Flexible pick-up options and many more.
              </p>
              <div className="buttons">
                <button className="btn btn-danger me-3 rounded-0 p-2 fw-bold">
                  Book Ride <i className="fa fa-star ms-1"></i>
                </button>
                <button className="btn btn-dark rounded-0 p-2 fw-bold">
                  Learn More <i className="fa fa-chevron-right ms-1"></i>
                </button>
              </div>
            </div>
            <div className="col-md-7 mt-5 mt-md-0">
              <img className="img-fluid" src={carwhite1} alt="volvo" />
            </div>
          </div>
        </div>
      </section>
      <section className="book pt-5">
        <h6 className="fw-bold">Book a car</h6>
        <div>
          <div className="row">
            <div className="col-md-4">
              <div>
                <i className="fa fa-car text-danger"></i>
                <span className="fw-bold fs-6 ms-1">Select you car type</span>
                <span className="text-danger">*</span>
                <div className="input py-2">
                  <select
                    className="border-none outline-none form-select"
                    type="text"
                    name="pick-up-date"
                    placeholder="mm/dd/yyyy"
                    id=""
                  >
                    <option value="1">Select Your Car Type</option>
                    <option value="1">Benz</option>
                    <option value="1">BMW</option>
                    <option value="1">Ferrari</option>
                    <option value="1">Honda Fit</option>
                  </select>
                </div>
              </div>
              <div className="mt-2">
                <i className="fa fa-car text-danger"></i>
                <span className="fw-bold fs-6 ms-1">Pick up</span>
                <span className="text-danger">*</span>
                <div className="input py-2">
                  <input
                    className="datepicker eborder-none outline-none form-control"
                    type="text"
                    name="pick-up-date"
                    placeholder="mm/dd/yyyy"
                    id=""
                    value={email || ""}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <i className="fa fa-car text-danger"></i>
                <span className="fw-bold fs-6 ms-1">Pick up</span>
                <span className="text-danger">*</span>
                <div className="input py-2">
                  <input
                    className="border-none outline-none form-control"
                    type="text"
                    name="pick-up"
                    placeholder="Select pick up location"
                    id=""
                    value={email || ""}
                  />
                </div>
              </div>
              <div className="mt-2">
                <i className="fa fa-car text-danger"></i>
                <span className="fw-bold fs-6 ms-1">Drop of</span>
                <span className="text-danger">*</span>
                <div className="input py-2">
                  <input
                    className="border-none outline-none form-control"
                    type="text"
                    name="drop off date"
                    placeholder="mm/dd/yyyy"
                    id=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <i className="fa fa-car text-danger"></i>
                <span className="fw-bold fs-6 ms-1">Drop-of</span>
                <span className="text-danger">*</span>
                <div className="input py-2">
                  <input
                    className="border-none outline-none form-control"
                    type="text"
                    name="Drop off"
                    placeholder="Select drop off location"
                    id=""
                  />
                </div>
              </div>
              <div className="mt-2">
                <div className="input py-4 d-flex align-items-center justify-content-center">
                  <input
                    className="btn btn-danger rounded-0 fw-bold"
                    type="text"
                    name="car-type"
                    value="Search"
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="plan text-center mt-5">
        <div className="row">
          <div className="col-md-4">
            <i className="fa fa-car fs-3"></i>
            <div className="bottom-text px-4 pt-4">
              <h6 className="fw-bold">Select Car</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                dolore deleniti dolorum saepe.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-car fs-3"></i>
            <div className="bottom-text px-4 pt-4">
              <h6 className="fw-bold">Select Car</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                dolore deleniti dolorum saepe.
              </p>
            </div>
          </div>
          <div className="col-md-4 ">
            <span className="rounded-pill ">
              <i className="fa fa-car fs-3"></i>
            </span>
            <div className="bottom-text px-4 pt-4">
              <h6 className="fw-bold">Select Car</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                dolore deleniti dolorum saepe.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="models text-center pt-5">
        <h6 className="fw-bold">Vehicle Models</h6>
        <h2 className="fw-bold">Our rental fleet</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
          Lorem ipsum dolor sit.
        </p>
        <div className="pt-5">
          <div className="row py-4 bg-light">
            <div className="col-md-3">
              <div className="row">
                {products.map((car, index) => (
                  <>
                    <div
                      className="col-md-12 my-auto"
                      key={index}
                      onClick={() => setSelected({ ...car })}
                    >
                      <button
                        className={
                          car.id === selected.id
                            ? "btn text-dark btn-outline-danger fw-bold p-3 w-100 rounded-0 border-3 border-danger"
                            : "btn text-dark btn-outline-danger fw-bold p-3 w-100 rounded-0 border-0"
                        }
                      >
                        {car.productName}
                      </button>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="car-img col-md-6">
              <div className="mt-5">
                <img
                  className="img-fluid h-50"
                  src={selected.imgUrl}
                  alt="pizza"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="border border-2 border-dark my-auto mt-4 mt-md-0">
                <button className="btn text-white text-dark btn-danger fw-bold p-3 w-100 rounded-0 border-0">
                  <span className="fs-6">$35</span> /rent per day
                </button>
                <div className="d-flex text-dark btn-outline-danger fw-bold p-2 w-100 rounded-0 border-0">
                  <div className="border border-top-0 border-start-0 border-bottom-0 border-dark w-50">
                    Model
                  </div>
                  <div className="w-50">{selected.model}</div>
                </div>
                <div className="d-flex text-dark btn-outline-danger fw-bold p-2 w-100 rounded-0 border-0">
                  <div className="border border-top-0 border-start-0 border-bottom-0 border-dark w-50">
                    Mark
                  </div>
                  <div className="w-50">{selected.Mark}</div>
                </div>
                <div className="d-flex text-dark btn-outline-danger fw-bold p-2 w-100 rounded-0 border-0">
                  <div className="border border-top-0 border-start-0 border-bottom-0 border-dark w-50">
                    Year
                  </div>
                  <div className="w-50">{selected.year}</div>
                </div>
                <div className="d-flex text-dark btn-outline-danger fw-bold p-2 w-100 rounded-0 border-0">
                  <div className="border border-top-0 border-start-0 border-bottom-0 border-dark w-50">
                    Doors
                  </div>
                  <div className="w-50">{selected.doors}</div>
                </div>
                <div className="d-flex text-dark btn-outline-danger fw-bold p-2 w-100 rounded-0 border-0">
                  <div className="border border-top-0 border-start-0 border-bottom-0 border-dark w-50">
                    AC
                  </div>
                  <div className="w-50">{selected.AC}</div>
                </div>
                <div className="d-flex text-dark btn-outline-danger fw-bold p-2 w-100 rounded-0 border-0">
                  <div className="border border-top-0 border-start-0 border-bottom-0 border-dark w-50">
                    Transmission
                  </div>
                  <div className="w-50">{selected.transmission}</div>
                </div>
                <div className="d-flex text-dark btn-outline-danger fw-bold p-2 w-100 rounded-0 border-0">
                  <div className="border border-top-0 border-start-0 border-bottom-0 border-dark w-50">
                    Fuel
                  </div>
                  <div className="w-50">{selected.fuel}</div>
                </div>
              </div>
              <button className="btn my-2 text-dark btn-danger fw-bold p-2 w-100 rounded-0 border-0">
                <span className="fs-5 text-white">Reserve Now</span>
              </button>
            </div>
          </div>
          <div className="cheap-car bg-dark text-white p-3">
            <h3 className="fw-bold">Save big with our cheap car Rental!</h3>
            <p>
              Top Airpots. Local Suppliers.{" "}
              <span className="text-danger">24/7</span> Support
            </p>
          </div>
          <div className="cars my-5">
            <div className="row">
              <div className="col-md-7 mx-auto my-auto">
                <img className="img-fluid h-50" src={carred1} alt="pizza" />
              </div>
            </div>
          </div>
          <div className="why-us text-start text-dark">
            <div className="row">
              <div className="col-md-5 pe-5">
                <h6 className="fw-bold">Why choose Us</h6>
                <h2 className="fw-bold">
                  Best valued deals you will ever find
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum non, aut fugit nostrum minima iusto ad odio,
                  voluptate esse obcaecati enim cum quo molestiae animi,
                  laboriosam minus veniam omnis.
                </p>
                <button className="btn btn-danger rounded-0 fw-bold">
                  Find Details
                  <span className="ms-2">
                    <i className="fa fa-car text-warning"></i>
                  </span>
                </button>
              </div>
              <div className="col-md-7 ps-5">
                <div className="align-items-center  justify-content-center d-flex">
                  <i className="fa fa-car text-warning fs-1"></i>
                  <div className="pe-5 ps-4 pt-3 pt-md-0">
                    <h6 className="fw-bold">Cross Country Drive</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eos iste vitae voluptatum, necessitatibus commodi
                      possimus?
                    </p>
                  </div>
                </div>
                <div className="align-items-center justify-content-center d-flex">
                  <i className="fa fa-car text-warning fs-1"></i>
                  <div className="pe-5 ps-4">
                    <h6 className="fw-bold">Cross Country Drive</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eos iste vitae voluptatum, necessitatibus commodi
                      possimus?
                    </p>
                  </div>
                </div>
                <div className="align-items-center justify-content-center d-flex">
                  <i className="fa fa-car text-warning fs-1"></i>
                  <div className="pe-5 ps-4">
                    <h6 className="fw-bold">Cross Country Drive</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eos iste vitae voluptatum, necessitatibus commodi
                      possimus?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials my-5">
        <div className="">
          <div className="row">
            <div className="col-md-7 mx-auto text-center">
              <h6 className="fw-bold">Reviewed by People</h6>
              <h3 className="fw-bold">Client's Testimonials</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos perspiciatis soluta optio natus magnam dolor alias
                nemo voluptatibus, hic maiores quasi.
              </p>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-md-6 px-5">
              <div className="user-details">
                <div className="user-img mt-1 d-flex align-items-center position-relative">
                  <img
                    src={pizza}
                    alt="user"
                    style={{ width: 43, height: 40, borderRadius: 20 }}
                  />
                  <div
                    className="name ms-3 pt-3 flex-fill"
                    style={{ lineHeight: 0.5 }}
                  >
                    <p className="fw-bold">Parry Potter</p>
                    <p>Belgade</p>
                  </div>

                  <p
                    className="text-red text-danger position-absolute"
                    style={{
                      fontSize: 140,
                      height: 30,
                      // top: 0,
                      right: 0,
                      bottom: 45,
                    }}
                  >
                    "
                  </p>
                </div>
              </div>
              <h6 className="pt-1 text-center text-md-start">
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem saepe, officiis in architecto quod illum consequuntur
                totam!"
              </h6>
            </div>
            <div className="col-md-6 px-5">
              <div className="user-details">
                <div className="user-img mt-1 d-flex align-items-center position-relative">
                  <img
                    src={pizza}
                    alt="user"
                    style={{ width: 43, height: 40, borderRadius: 20 }}
                  />
                  <div
                    className="name ms-3 pt-3 flex-fill"
                    style={{ lineHeight: 0.5 }}
                  >
                    <p className="fw-bold">Parry Potter</p>
                    <p>Belgade</p>
                  </div>

                  <p
                    className="text-red text-danger position-absolute"
                    style={{
                      fontSize: 140,
                      height: 30,
                      // top: 0,
                      right: 0,
                      bottom: 45,
                    }}
                  >
                    "
                  </p>
                </div>
              </div>
              <h6 className="pt-1 text-center text-md-start">
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem saepe, officiis in architecto quod illum consequuntur
                totam!"
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="faq-text text-center">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h6 className="fw-bold">FAQ</h6>
              <h2 className="fw-bold">Frequently Asked Questions</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis voluptates unde velit modi sint architecto nostrum
                molestias dolores.
              </p>
              <div className="faqs mt-4">
                <div className="accordion">
                  <div>
                    <div className="bd-example">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item ">
                          <h4 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button bg-danger text-white fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Accordion Item #1
                            </button>
                          </h4>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <strong>
                                This is the first item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h4 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed fw-bold text-white bg-danger"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Accordion Item #2
                            </button>
                          </h4>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <strong>
                                This is the second item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h4 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed fw-bold text-white bg-danger"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Accordion Item #3
                            </button>
                          </h4>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <strong>
                                This is the third item's accordion body.
                              </strong>{" "}
                              It is hidden by default, until the collapse plugin
                              adds the appropriate classes that we use to style
                              each element. These classes control the overall
                              appearance, as well as the showing and hiding via
                              CSS transitions. You can modify any of this with
                              custom CSS or overriding our default variables.
                              It's also worth noting that just about any HTML
                              can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="download-app my-5">
        <div className="row">
          <div className="col-md-4">
            <h3 className="fw-bold">Download our app to get most out of it</h3>
            <p className="pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus rerum nulla aperiam animi veniam placeat error!
            </p>
            <div className="d-flex pt-3 align-items-center">
              <button
                className="btn btn-dark pt-2 d-flex align-items-center justify-content-between"
                style={{ lineHeight: 0.001 }}
              >
                <i className="fa fa-play fs-4"></i>
                <div className="ms-2">
                  <p style={{ fontSize: 7 }}>Get it on</p>
                  <p>Google Play</p>
                </div>
              </button>
              <button
                className="btn btn-dark pt-2 d-flex align-items-center ms-4"
                style={{ lineHeight: 0.001 }}
              >
                <i className="fa fa-play fs-4"></i>
                <div className="ms-2">
                  <p style={{ fontSize: 7 }}>Get it on</p>
                  <p>Google Play</p>
                </div>
              </button>
            </div>
          </div>
          <div className="col-md-8 mt-4 mt-md-0 pe-5">
            <div className="phone-img d-flex flex-column">
              <img
                className="img-fluid align-self-end"
                style={{ height: 220 }}
                src={carwhite2}
                alt="pizza"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="row">
          <div className="col-md-3">
            <div className="d-flex flex-row">
              <p className="fw-bold"> CAR</p>
              <p className="ms-1"> Rental</p>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis, provident.
            </p>
            <i className="fa fa-phone"></i>
            <span className="fw-bold ms-1">(123)-456-789</span> <br />
            <i className="fa fa-envelope"></i>
            <span className="fw-bold ms-1">carrental@gmail.com</span>
          </div>
          <div className="col-md-3 text-center">
            <div className="">
              <p className="fw-bold">COMPANY</p>
            </div>
            <div>
              <p>Harare</p>
              <p>Careers</p>
              <p>Mobile</p>
              <p>Blog</p>
              <p>How do we work</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-row">
              <p className="fw-bold">WORKING HOURS</p>
            </div>
            <div>
              <p>Mon - Fri 9:00AM - 9:00PM</p>
              <p>Sat 9:00AM - 19:00PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-row">
              <p className="fw-bold"> SUBSCRIPTION </p>
            </div>
            <p style={{ fontWeight: 500 }}>
              Subscribe youremail address for latest news and updates
            </p>
            <form>
              <input
                className="form-control"
                placeholder="example@gmail.com"
                type="email"
                // id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
                // defaultValue="example@gmail.com"
              />
              <button className="btn btn-danger w-100 mt-2" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarRental;
