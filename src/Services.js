import React, { Fragment } from "react";
import "./style.css";

const Services = () => {
  return (
    <Fragment>
      <section id="Services" className="container mb-5 pt-5">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="font-monospace my-5">What we offer!</h4>
            <h2 className="display-1">Take advantage of our premium services.</h2>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-4">
          <div className="col card shadow text-white bg-primary mb-5 mb-sm-3">
            <div className="card-header display-6 mt-2 shadow">
              <i className="bi bi-briefcase"></i> Financial Advice
            </div>
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <div className="list-group mb-3">
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  First checkbox
                </label>
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  Second checkbox
                </label>
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  Third checkbox
                </label>
              </div>
            </div>
            <div className="card-footer">
              <a href="#FinancialAdvice" className="btn btn-outline-light shadow">
                Get started
              </a>
            </div>
          </div>

          <div className="col card shadow text-white bg-info mb-5 mb-sm-3">
            <div className="card-header display-6 text-dark mt-2 shadow">
              <i className="bi bi-wallet2"></i> Investment Advice
            </div>
            <div className="card-body">
              <p className="card-text text-dark">Lorem ipsum dolor sit amet.</p>
              <div className="list-group mb-3">
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  First checkbox
                </label>
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  Second checkbox
                </label>
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  Third checkbox
                </label>
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  Fourth checkbox
                </label>
              </div>
            </div>
            <div className="card-footer">
              <a href="#InvestmentAdvice" className="btn btn-outline-light shadow">
                Get started
              </a>
            </div>
          </div>

          <div className="card col shadow text-white bg-primary mb-5 mb-sm-3">
            <div className="card-header display-6 mt-2 shadow">
              <i className="bi bi-pie-chart"></i> Risk Management
            </div>
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet.</p>

              <div className="list-group mb-3">
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  First checkbox
                </label>
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  Second checkbox
                </label>
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  Third checkbox
                </label>
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  Fourth checkbox
                </label>
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  Fifth checkbox
                </label>
              </div>
            </div>
            <div className="card-footer">
              <a href="#RiskManagement" className="btn btn-outline-light shadow">
                Get started
              </a>
            </div>
          </div>

          <div className="card col shadow text-white bg-info mb-5 mb-sm-3">
            <div className="card-header text-dark mt-2 shadow display-6">
              <i className="bi bi-cash-coin"></i> Tax & Accounting
            </div>
            <div className="card-body">
              <p className="card-text text-dark">Lorem ipsum dolor sit amet.</p>
              <div className="list-group mb-3">
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  First checkbox
                </label>
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  Second checkbox
                </label>
                <label className="list-group-item">
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    checked
                  />
                  Third checkbox
                </label>
              </div>
            </div>

            <div className="card-footer">
              <a href="#Tax&Accounting" className="btn btn-outline-light shadow">
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
