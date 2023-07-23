import React, { Fragment } from "react";
import GetStartedModal from "./GetStartedModal";
import "./style.css";

const Header = () => {
  return (
    <Fragment>
      <header className="vh-100 headerBackground">
        <div className="container headerMainDiv">
          <div className="text-light font-monospace text-shadow animate-text-right">
            <span className="rounded subtitle">
              Financial Planing For Life
            </span>
          </div>
          <div className="d-flex display-3 text-light text-shadow rounded animate-text-right-3s">
             <span className="title col-6 ps-3 rounded">
              Trusted to help guide entrepreneurs make better financial decisions
             </span>
          </div>
          <button
            className="btn btn-lg btn-info shadow mt-4 animate-text-right-5s cssBold"
            data-bs-toggle="modal"
            data-bs-target="#getOffer"
          >
            Get offer
          </button>
        </div>
        <GetStartedModal />
      </header>
    </Fragment>
  );
};

export default Header;
