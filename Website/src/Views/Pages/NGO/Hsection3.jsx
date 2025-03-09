import React from 'react';

const Hsection3 = () => {
    return (
        <div className="section bg-light section-counter py-5">
            <div className="container py-5">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="box4 display-4 heading" data-aos="fade-up">
                            Stories of Impact
                        </h2>
                        <p className="text-muted section_txt" data-aos="fade-up" data-aos-delay="100">
                            Discover how your efforts make a difference in lives and communities.
                        </p>
                    </div>
                </div>

                <div className="row mb-5 pb-3">
                    <div className="col-lg-7 d-flex align-items-center" data-aos="fade-right" data-aos-delay="200">
                        <div className="ms-5 p-5">
                            <h3 className="fs-4">A Life Transformed Through Medicine</h3>
                            <p>
                                Rameshbhai, a daily wage worker, was able to save ₹3,000 on medical expenses thanks to
                                surplus medicines provided by an NGO through this system. Today, he can afford better
                                education for his children.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center" data-aos="fade-left" data-aos-delay="200">
                        {/* Uncomment and update the path to the image */}
                        <img src={"images/NGO/story_1.jpg"} className="img-fluid rounded shadow-sm w-50 my-3" alt="Rameshbhai's Story" />
                    </div>

                    <div className="col-lg-5 text-center order-lg-1" data-aos="fade-right" data-aos-delay="300">
                        {/* Uncomment and update the path to the image */}
                        <img src={"images/NGO/story_2.jpg"} className="img-fluid rounded shadow-sm w-50 my-3" alt="Helping Hands NGO" />
                    </div>
                    <div className="col-lg-7 d-flex align-items-center order-lg-2" data-aos="fade-left" data-aos-delay="300">
                        <div className="me-5 p-5">
                            <h3 className="fs-4">Helping Hands Foundation</h3>
                            <p>
                                Helping Hands Foundation, an NGO in Ahmedabad, distributed 1,000 surplus medicine packets
                                to rural areas, transforming access to healthcare for 500 families.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row text-center pt-4 flip-section" style={{ backgroundImage: "url('images/img_v_2-min.jpg')" }}>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="200">
                                    <h3 className="display-4 text-secondary countup">10000</h3>
                                    <p className="text-light">Medicines Saved</p>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="300">
                                    <h3 className="display-4 text-secondary countup">100</h3>
                                    <p className="text-light">NGOs Partnered</p>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="400">
                                    <h3 className="display-4 text-secondary countup">5</h3>
                                    <p className="text-light">Tons of Waste Prevented</p>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in" data-aos-delay="500">
                                    <h3 className="display-4 text-secondary countup">50000</h3>
                                    <p className="text-light">Beneficiaries Helped</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hsection3;

