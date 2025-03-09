import React from "react";

const Section5 = () => {
  return (
    <div>
      <section className="bg-light section py-5">
        <div className="container py-5">
          <div
            className="text-center mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-center mb-4 display-4 heading">
              Eligible Donations
            </h2>
            <p className="text-center text-muted mb-5 section_txt">
              Every contribution brings hope to someone in need.
            </p>
          </div>

          <div
            className="row mb-5 pb-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-12 col-lg-3 col-md-4 d-flex justify-content-center">
              <img
                width={100}
                src=" images/Donate_med/fifth_sec_1.png"
                alt="Unopened Medicines Icon"
                className="img-fluid pb-3 vertical_img"
              />
            </div>
            <div className="col-12 col-lg-9 col-md-8 d-flex align-items-center">
              <div className="text-md-start text-center">
                <h4 className="fw-semibold">
                  Unopened and Unexpired Medications
                </h4>
                <p className="text-muted mb-0 ">
                  Ensure the medicines are sealed and within their expiration
                  date.
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-3" data-aos="fade-up" data-aos-delay="100">
            <div className="col-12 col-lg-3 col-md-4 d-flex justify-content-center">
              <img
                width={100}
                src=" images/Donate_med/fifth_sec_2.png"
                alt="OTC Medicines Icon"
                className="img-fluid pb-3 vertical_img"
              />
            </div>
            <div className="col-12 col-lg-9 col-md-8 d-flex align-items-center">
              <div className="text-md-start text-center">
                <h4 className="fw-semibold">
                  Over-the-Counter (OTC) Medicines
                </h4>
                <p className="text-muted mb-0">
                  Commonly used OTC medicines that are unopened and in good
                  condition.
                </p>
              </div>
            </div>
          </div>

          <div
            className="text-center mt-5 quote"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <blockquote className="  py-3">
              <span className="quote_sym">❝</span>{" "}
              <i className="text-success fs-5">
                A small act of kindness can create a big impact in someone's
                life.
              </i>
              <span className="quote_sym">❞</span>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section5;
