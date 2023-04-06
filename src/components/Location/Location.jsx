import React from "react";

const Location = () => {
  return (
    <div className="container card my-5 p-4">
      <div className="row mt-4 p-4">
        <div className="col-12 col-md-12 col-lg-6 p-2">
          <h2>Where we are ?</h2>
          <hr className="w-50 border-4" />
     <img
            src="../../../public/images/thinkMan-unscreen.gif"
            alt=""
            className="img-fluid w-75"
          />
        </div>
        <div className="col-12 col-md-12 col-lg-6 my-5">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ehbc=2E312F"
            id="locationMap"
            className="img-thumbnail"
            style={{ width: "100%", height: "500px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
