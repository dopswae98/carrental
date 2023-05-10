import React from "react";

const TheNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-muted text-white">
        <div class="container-fluid">
          <a class="logo navbar-brand fw-bold" href="/#">
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
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
    </div>
  );
};

export default TheNavbar;
