import React, { Fragment } from "react";
import "./style.css";

const GetStartedModal = () => {
  return (
    <Fragment>
      <div
        className="modal fade"
        id="getOffer"
        tabIndex="-1"
        aria-labelledby="getOfferLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="getOfferLabel">
                New message
              </h5>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="mb-3">
                  <label className="col-form-label cssBold">Recipient:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="col-form-label cssBold">First name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label cssBold">Last name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label cssBold">Message:</label>
                  <textarea type="text" className="form-control" required></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary" type="submit">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GetStartedModal;
