import React from 'react';
import MessageBtn from '../Components/MessageBtn';

const Section2 = () => {
    return (
        <>
            <div className="section mt-5 pt-5 py-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h2 className="heading get-in-touch-heading">Get In Touch</h2>
                            <p className="text-black-50 get-in-touch-para">
                                We’re here to answer any questions you have about donating unused medicines and how it benefits
                                communities in need. Please feel free to reach out to us, and let’s work together to make
                                healthcare accessible for everyone.
                            </p>
                        </div>
                    </div>

                    <form action="" className="row justify-content-between">

                        <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="row">

                                <div className="mb-3 col-lg-6">
                                    <label htmlFor="name" className="ps-3 fw-bold label-text mb-2">Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3 col-lg-6">
                                    <label htmlFor="email" className="ps-3 fw-bold label-text mb-2">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>

                                <div className="mb-3 col-lg-12">
                                    <label htmlFor="message" className="ps-3 fw-bold label-text mb-2">Message</label>
                                    <textarea name="message" id="message" className="form-control" cols="30" rows="10"></textarea>
                                </div>

                                <MessageBtn />

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="200">
                            <div className="row">
                                <div className="col-6 col-lg-6 mb-4">
                                    <h3 className="h6 fw-bold text-secondary">Address</h3>
                                    <p>123 Charity Lane, Ahmedabad, Gujarat 380001</p>
                                </div>
                                <div className="col-6 col-lg-6 mb-4">
                                    <h3 className="h6 fw-bold text-secondary">Phone</h3>
                                    <p>
                                        +91 999 8888 777 <br />
                                        +91 900 1234 567
                                    </p>
                                </div>
                                {/* 
                                <div className="col-6 col-lg-6 mb-4">
                                    <h3 className="h6 fw-bold text-secondary">Follow</h3>
                                    <ul className="list-unstyled d-flex gap-2 social-custom">
                                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                        <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest"></i></a></li>
                                        <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a></li>
                                    </ul>

                                </div> */}
                                <div className="col-6 col-lg-6 mb-4">
                                    <h3 className="h6 fw-bold text-secondary">Email</h3>
                                    <p>
                                        <a href="mailto:contact@medicine-donation.org">medic-aid@medicine-donation.org</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Section2;
