import React, { Fragment } from "react";
import "./style.css";

const Footer = () => {
  return (
    <Fragment>
      <footer id="Contact" class="bg-light pt-3">
        <div class="container">
          <h4 class="text-info text-decoration-undeline font-monospace mb-3">
            Menyahrt Media
          </h4>
          <small class="fw-lighter">Lorem ipsum dolor sit amet.</small>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas non,
            distinctio sed aliquid quibusdam dolore, voluptatem expedita illum
            quos labore, velit provident obcaecati repellendus laudantium harum
            eveniet voluptatum sunt exercitationem.
          </p>
          <div class="row">
            <div class="col container">
              <h5>Contact us</h5>

              <ul class="lsit-group">
                <li class="list-group-item">
                  <i class="bi bi-house-door m-2 text-info"></i> Web Design City
                </li>
                <li class="list-group-item">
                  <i class="bi bi-signpost-2 m-2 text-info"></i> Web Design Road
                </li>
                <li class="list-group-item">
                  <i class="bi bi-telephone m-2 text-info"></i> +448811228833458
                </li>
                <li class="list-group-item">
                  <button
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#email"
                    aria-controls="email"
                    className="contactButton"
                  >
                    <i class="bi bi-envelope m-2 text-info"></i>
                    web-design@email.com
                  </button>
                </li>
                <li class="list-group-item">
                  <a className="contactPortfolio" href="">
                    <i class="bi bi-globe m-2 text-info"></i>
                    Menyahrt Media
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-dark text-light text-center mt-3 p-3">
          <div class="row">
            <div class="col-sm-7">
              &copy; Copyright 2020
              <span class="font-monospace"> Menyahrt Media. </span>
              All rights reserved
            </div>
            <div class="col-sm-5">
              Designed by <span class="font-monisoace">Nobert BM</span>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
