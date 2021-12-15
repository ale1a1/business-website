import React, { Fragment } from "react";
import "./style.css";

const Team = () => {
  return (
    <Fragment>
      <section className="container mb-5 pt-4" id="Team">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="font-monospace my-5">Our Expert Team</h4>
            <h2 className="display-1">
              Meet our expert finlance executive team.
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 mb-5 mb-sm-3">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src="https://source.unsplash.com/7YVZYZeITc8"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text text-info">Advisor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5 mb-sm-3">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src="https://source.unsplash.com/u3WmDyKGsrY"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text text-info">Advisor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5 mb-sm-3">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src="https://source.unsplash.com/Qy4wpL2B4ac"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text text-info">Advisor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5 mb-sm-3">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src="https://source.unsplash.com/RGtSTDmmcCk"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text text-info">Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Team;
