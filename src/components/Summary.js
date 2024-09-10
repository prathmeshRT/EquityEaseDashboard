import React from "react";

const Summary = () => {
  return (
    <div className="container">
      <div className="username mb-4">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section mb-4">
        <span>
          <p>Equity</p>
        </span>

        <div className="data row">
          <div className="col-md-6">
            <div className="first text-center">
              <h3>3.74k</h3>
              <p>Margin available</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="second">
              <p>
                Margins used <span>0</span>
              </p>
              <p>
                Opening balance <span>3.74k</span>
              </p>
            </div>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section mb-4">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data row">
          <div className="col-md-6">
            <div className="first text-center">
              <h3 className="profit">
                1.55k <small>+5.20%</small>
              </h3>
              <p>P&L</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="second">
              <p>
                Current Value <span>31.43k</span>
              </p>
              <p>
                Investment <span>29.88k</span>
              </p>
            </div>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
};

export default Summary;
