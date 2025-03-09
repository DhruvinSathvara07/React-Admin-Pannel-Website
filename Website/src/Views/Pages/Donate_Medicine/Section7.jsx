import React from 'react'

const Section7 = () => {
  return (
    <div>

      <div className="py-5 bg-light section">
        <div className="container text-center">

          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="display-4 heading mb-4 fw-bold text-success ">Get Started</h2>
            <p className="text-muted mb-4 text-secondary fs-5">
              Sign up today to contribute to our mission of creating a healthier and more accessible world by
              donating
              unused medications to those in need. Every donation counts, and your small action can make a big
              difference.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <button className="mt-3 border rounded-pill border-2 border-success py-2 px-4 text-success btn "
            >Donate Now</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section7