import React from "react";
import img1 from "../assets/labelprint.jpg";
import "./printbase.css";
import "font-awesome/css/font-awesome.css";

const Printsbase = () => {
  return (
    <div className="printbase p-3">
      <section className="nav-section">Nav</section>
      <section className="hero-section mt-5">
        <div className="hero-container">
          <div className="container">
            <div className="hero row">
              <div className="hero-texts col-md-6  my-4">
                <h1 className="h1 fw-bolder">
                  <span className="text-warning">PRINTBASE SOLUTIONS</span>{" "}
                  <br /> PRINT IMAGE WITH{" "}
                  <span className="text-warning">IMPACT</span> TO GROW YOUR{" "}
                  <span className="text-warning">BRAND</span>
                </h1>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias facere omnis inventore debitis, saepe dolor delectus id
                  incidunt quod vero facilis sint ipsa velit corrupti earum
                  repellat ratione expedita ad?
                </p>
                <button className="btn btn-warning fw-bold">Order Now</button>
              </div>
              <div className="col">
                <img className="ms-5 rounded" src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="container">
          <div className="top-gallery">dfdf</div>
          <div className="bottom-gallery">
            <div className="row">
              <div className="col-md-4">ksjdk</div>
              <div className="col-md-4">ksjdk</div>
              <div className="col-md-4">ksjdk</div>
            </div>
          </div>
        </div>
      </section>
      <section className="accordion-section container my-4">
        <div className="col-md-10 mx-auto">
          <div>
            <div class="bd-example">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h4 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
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
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h4 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h4 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-stuff my-3 container">
        <div className="rectangle">
          <div className="row">
            <div className="col-md-4">
              <h2 className="fw-bold">
                OUR FACTORY <br />
                WANNA SEE ?
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas doloremque praesentium, quos corporis fugiat iusto.
              </p>
              <button className="btn btn-warning">ksjdkljkk</button>
              <button className="btn btn-outline-warning ms-3">
                ksjdkljkksjdkjk
              </button>
            </div>
            <div className="bigger col-md-8">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section container">
        <div className="row">
          <div className="footer-left col-md-6">
            <h4 className="my-3">
              Get InTouch <br />
              with us
            </h4>
            <div className="row">
              <div className="d-flex justify-content-between">
                <div className="left-container">
                  <div className="left d-flex">
                    <i className="fa fa-home text-warning fs-4"></i>
                    <p className="ms-2">printbasezim@gmail.com</p>
                  </div>
                  <div className="left d-flex">
                    <i className="fa fa-phone text-warning fs-4"></i>
                    <p className="ms-2">printbasezim@gmail.com</p>
                  </div>
                  <div className="left d-flex">
                    <i className="fa fa-home text-warning fs-4"></i>
                    <p className="ms-2">printbasezim@gmail.com</p>
                  </div>
                  <div className="left d-flex">
                    <i className="fa fa-map text-warning fs-4"></i>
                    <p className="ms-2">printbasezim@gmail.com</p>
                  </div>
                </div>
                <div className="right">
                  <div className="row">
                    <div className="d-flex justify-content-between">
                      <div className="left-container">
                        <div className="left d-flex">
                          <p className="ms-2">printbasezim@gmail.com</p>
                        </div>
                        <div className="left d-flex">
                          <p className="ms-2">printbasezim@gmail.com</p>
                        </div>
                        <div className="left d-flex">
                          <p className="ms-2">
                            6 Nigel Phillip Eastlea <br /> Harare
                          </p>
                        </div>
                        <div className="left d-flex">
                          <p className="ms-2">FAQ'S</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map col-md-6">
            <img className="ms-5" src={img1} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Printsbase;
