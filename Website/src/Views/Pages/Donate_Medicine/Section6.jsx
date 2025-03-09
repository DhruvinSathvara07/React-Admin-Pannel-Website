import React from "react";

const Section6 = () => {
  return (
    <div>
      <div className="py-5 section">
        <div className="container">
          <div
            className="text-center mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className=" mb-4 display-4 heading fw-bold text-success">
              What We Do Not Accept
            </h2>
            <p className="fs-5 ">
              Please review the list of items that we cannot accept for
              donation.
            </p>
          </div>

          <div className="row text-center">
            <div
              className="col-md-6 col-lg-4 my-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="images/Donate_med/sixth_sec_1.png"
                alt="Expired Medicines"
                className="mb-3 img-fluid w-25"
              />
              <h5 className="my-3">Expired Medicines</h5>
              <p className="px-md-5 ">
                Do not donate medicines that are past their expiration date.
              </p>
            </div>

            <div
              className="col-md-6 col-lg-4 my-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="images/Donate_med/sixth_sec_2.png"
                alt="Opened Medicines"
                className="mb-3 img-fluid w-25"
              />
              <h5 className="my-3">Opened Medicines</h5>
              <p className="px-md-5 ">
                We cannot accept medicines that are opened or partially used.
              </p>
            </div>

            <div
              className="col-md-6 col-lg-4 my-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                src="images/Donate_med/sixth_sec_3.png"
                alt="Damaged Packaging"
                className="mb-3 img-fluid w-25"
              />
              <h5 className="my-3">Damaged Packaging</h5>
              <p className="px-md-5 ">
                Medicines with torn, damaged, or broken packaging will not be
                accepted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
