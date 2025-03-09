import React from "react";

const Section4 = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div
              className="col-lg-12 "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="text-center mt-3 text-success fw-bold">
                Who Can Donate?
              </h1>
              <p className="text-center fs-5 ">
                Your contribution has the power to transform lives. Here's who
                can make a difference.
              </p>
            </div>
          </div>
          <div className="row text-center pt-5 mt-5">
            <div className="col-lg-3" data-aos="zoom-in-down">
              <img src="images/Donate_med/fourth_sec_1.png" width={80} alt="" />
              <h5 className="mt-3">Pharmacies</h5>
              <p className="">
                Donate unused medicines that are still within expiry to help
                those in need.
              </p>
            </div>
            <div className="col-lg-3" data-aos="zoom-in-down">
              <img src="images/Donate_med/fourth_sec_2.png" width={80} alt="" />
              <h5 className="mt-3">Nursing Homes</h5>
              <p className="">
                Contribute unexpired medicines and medical supplies that are no
                longer needed.
              </p>
            </div>
            <div className="col-lg-3" data-aos="zoom-in-down">
              <img src="images/Donate_med/fourth_sec_3.png" width={80} alt="" />
              <h5 className="mt-3">Manufacturers</h5>
              <p className="">
                Donate excess stock or discontinued medications to benefit
                underserved communities.
              </p>
            </div>
            <div className="col-lg-3" data-aos="zoom-in-down">
              <img src="images/Donate_med/fourth_sec_4.png" width={80} alt="" />
              <h5 className="mt-3">Individuals</h5>
              <p className="">
                Donate your unopened syrups, unexpired medicines to help others
                in need of essential care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
