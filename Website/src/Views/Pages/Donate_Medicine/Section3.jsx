// import React from 'react'

// const Section3 = () => {
//     return (
//         <div>
//             <div className="container-fluid howitworks bg-light">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <h1 className=' text-center  display-5 text-success fw-bold mt-5 pt-3 ' >How It Works</h1>
//                             <p className='text-center fs-5  mt-3 '>Follow these simple steps to donate unused medicines and make a difference.</p>
//                         </div>
//                     </div>

//                     <div className="row d-flex justify-content-center mt-5">
//                         <div className="col-lg-7  text-center mt-5 pt-3 ">
//                             <i class="fa-solid fa-user-plus fs-1 text-success">
//                             </i>
//                             <h3>Step 1: Register</h3>
//                             <p className='text-center signup-up-text   '>Sign up as a donor and provide details about the medicines you wish to donate.</p>
//                         </div>
//                         <div className="col-lg-5">
//                             <img width={450} className='img-fluid' src="img\third_sec_1.jpg" alt="" />
//                         </div>
//                     </div>

//                     <div className="row d-flex justify-content-center mt-5">
//                         <div className="col-lg-5">
//                             <img width={450} className='img-fluid' src="img\third_sec_2.jpg" alt="" />
//                         </div>
//                         <div className="col-lg-7  text-center mt-5 pt-3 ">
//                             <i class="fa-solid fa-circle-check fs-1 text-success "></i>

//                             <h3>Step 2: Admin Approval</h3>
//                             <p className='text-center signup-up-text   '>Our team verifies the details to ensure the medicines are safe and eligible for donation.</p>
//                         </div>
//                     </div>
//                     <div className="row d-flex justify-content-center mt-5">
//                         <div className="col-lg-7  text-center mt-5 pt-3    ">
//                             <i class="fa-solid fa-calendar-days text-warning  fs-1"></i>
//                             <h3>Step 3: Schedule Pickup</h3>
//                             <p className='text-center signup-up-text   '>Choose a convenient time slot for the pickup. Our partnered NGOs will handle it.</p>
//                         </div>
//                         <div className="col-lg-5">
//                             <img width={450} className='img-fluid' src="img\third_sec_3.jpg" alt="" />
//                         </div>
//                     </div>

//                     <div className="row d-flex justify-content-center mt-5">
//                         <div className="col-lg-5">
//                             <img width={450} className='img-fluid' src="img\third_sec_4.jpg" alt="" />
//                         </div>
//                         <div className="col-lg-7  text-center mt-5 pt-3 ">
//                             <i class="fa-solid fa-hand-holding-heart  fs-1"></i>
//                             <h3>Step 4: Deliver to Needy People</h3>
//                             <p className='text-center signup-up-text   '>NGOs distribute the medicines to individuals in need, making a meaningful impact.</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div >
//     )
// }

// export default Section3

import React from "react";

const Section3 = () => {
  return (
    <div>
      <div className="container-fluid howitworks bg-light py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h1
                className="text-center display-5 text-success fw-bold mt-5 pt-3"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                How It Works
              </h1>
              <p
                className="text-center fs-5 mt-3"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                Follow these simple steps to donate unused medicines and make a
                difference.
              </p>
            </div>
          </div>

          {/* Step 1 */}
          <div
            className="row d-flex justify-content-center mt-5"
            data-aos="fade-right"
          >
            <div className="col-12 col-md-7 text-center mt-5 pt-3">
              <i className="fa-solid fa-user-plus fs-1 text-success"></i>
              <h3>Step 1: Register</h3>
              <p className="text-center signup-up-text">
                Sign up as a donor and provide details about the medicines you
                wish to donate.
              </p>
            </div>
            <div className="col-12 col-md-5">
              <img
                data-aos="zoom-in-left"
                width="100%"
                className="img-fluid"
                src="images/Donate_med/third_sec_1.jpg"
                alt="Step 1: Register"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-12 col-md-5">
              <img
                width="100%"
                className="img-fluid"
                data-aos="zoom-in-right"
                src="images/Donate_med/third_sec_2.jpg"
                alt="Step 2: Admin Approval"
              />
            </div>
            <div
              className="col-12 col-md-7 text-center mt-5 pt-3"
              data-aos="fade-left"
            >
              <i className="fa-solid fa-circle-check fs-1 text-success"></i>
              <h3>Step 2: Admin Approval</h3>
              <p className="text-center signup-up-text">
                Our team verifies the details to ensure the medicines are safe
                and eligible for donation.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="row d-flex justify-content-center mt-5"
            data-aos="fade-right"
          >
            <div className="col-12 col-md-7 text-center mt-5 pt-3">
              <i className="fa-solid fa-calendar-days text-warning fs-1"></i>
              <h3>Step 3: Schedule Pickup</h3>
              <p className="text-center signup-up-text">
                Choose a convenient time slot for the pickup. Our partnered NGOs
                will handle it.
              </p>
            </div>
            <div className="col-12 col-md-5">
              <img
                width="100%"
                data-aos="zoom-in-left"
                className="img-fluid"
                src="images/Donate_med/third_sec_3.jpg"
                alt="Step 3: Schedule Pickup"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-12 col-md-5" data-aos="zoom-in-right">
              <img
                width="100%"
                className="img-fluid"
                src="images/Donate_med/third_sec_4.jpg"
                alt="Step 4: Deliver to Needy People"
              />
            </div>
            <div
              className="col-12 col-md-7 text-center mt-5 pt-3"
              data-aos="fade-left"
            >
              <i className="fa-solid fa-hand-holding-heart fs-1"></i>
              <h3>Step 4: Deliver to Needy People</h3>
              <p className="text-center signup-up-text">
                NGOs distribute the medicines to individuals in need, making a
                meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
