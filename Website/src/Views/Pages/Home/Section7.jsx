import React from 'react';

const Section7 = () => {
    return (
        <>
            <div className="section bg-light">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5" data-aos="fade-up">
                            <span className="subheading mb-3">Impact</span>
                            <h2 className="heading mb-4">Discover Our Impact in Medicine Donation</h2>
                            <p>
                                Our system has empowered NGOs to distribute unused medicines to those in need,
                                ensuring lives are saved and resources are utilized efficiently.
                            </p>
                            <p>
                                Be part of this journey and contribute to building a healthier, more sustainable
                                future through medicine donation.
                            </p>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="row section-counter">
                                <div className="col-lg-6">
                                    <div className="counter">
                                        <i className="fas fa-pills d-block text-secondary fs-1"></i>
                                        <span className="number countup">589</span>
                                        <span className="d-block">Medicines Donated</span>
                                    </div>
                                    <div className="counter">
                                        <i className="fas fa-truck-medical d-block text-secondary fs-1 "></i>
                                        <span className="number countup">200</span>
                                        <span className="d-block">Medicines Delivered</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="counter mt-5">
                                        <i className="fas fa-hand-holding-heart d-block text-secondary fs-1"></i>
                                        <span className="number countup">4211</span>
                                        <span className="d-block">Donors</span>
                                    </div>

                                    <div className="counter">
                                        <i className="fas fa-hands-helping d-block text-secondary fs-1"></i>
                                        <span className="number countup">60</span>
                                        <span className="d-block">NGO Partnerships</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section7;
