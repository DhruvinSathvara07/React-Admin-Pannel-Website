import React from 'react'

const Section4 = () => {
    return (
        <>
            <div class="section">
                <div class="container">
                    <div class="row mb-5 align-items-center justify-content-between">
                        <div class="col-lg-5" data-aos="fade-up" data-aos-delay="0">
                            <span class="subheading mb-3">Who We Are</span>
                            <h2 class="heading">About Us</h2>
                            <p>We are committed to bridging the gap between surplus medicine and those in need by connecting
                                donors and NGOs to create a healthier, more equitable community.</p>
                        </div>

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <blockquote>
                                "Our mission is to ensure no medicine goes to waste and everyone has access to the healthcare
                                resources they deserve."
                            </blockquote>
                        </div>
                    </div>

                    <div class="row justify-content-between">
                        <div class="col-lg-5 pe-lg-5" data-aos="fade-up" data-aos-delay="200">

                            <ul class="nav nav-pills mb-5 custom-nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-mission-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-mission" type="button" role="tab" aria-controls="pills-mission"
                                        aria-selected="true">Our Mission</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-values-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-values" type="button" role="tab" aria-controls="pills-values"
                                        aria-selected="false">Our Values</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-history-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-history" type="button" role="tab" aria-controls="pills-history"
                                        aria-selected="false">Our History</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-mission" role="tabpanel"
                                    aria-labelledby="pills-mission-tab">
                                    <h2 class="mb-3 text-primary fw-bold">Our Mission</h2>
                                    <p>Our mission is to reduce medicine waste and provide access to essential healthcare
                                        resources for underserved communities. By connecting donors and NGOs, we create a bridge
                                        to ensure surplus medicine reaches those who need it most.</p>
                                    <p>We are driven by the vision of a world where no medicine goes unused, and everyone has
                                        the opportunity to lead healthier lives. Together, we can make a significant impact on
                                        healthcare accessibility and waste reduction.</p>
                                    <p class="mt-5">
                                        <a href="donate_medicine.html" class="btn btn-primary me-4">Donate Now</a>
                                        <a href="about.html" class="link-more">Learn More <span
                                            class="icon-chevron-right"></span></a>
                                    </p>
                                </div>


                                <div class="tab-pane fade" id="pills-values" role="tabpanel" aria-labelledby="pills-values-tab">
                                    <h2 class="mb-3 text-primary fw-bold">Our Values</h2>
                                    <p>We are guided by the principles of compassion, collaboration, and sustainability. Our
                                        work centers on ensuring no medicine goes to waste while empowering communities to
                                        access the healthcare resources they deserve.</p>
                                    <p>Integrity and transparency define our approach. We believe in creating meaningful
                                        partnerships between donors and NGOs to maximize the impact of every contribution,
                                        fostering a healthier and more equitable future.</p>
                                    <p class="mt-5">
                                        <a href="NGO.html" class="btn btn-primary me-4">Partner with Us</a>
                                        <a href="about.html" class="link-more">Learn More <span
                                            class="icon-chevron-right"></span></a>
                                    </p>
                                </div>


                                <div class="tab-pane fade" id="pills-history" role="tabpanel"
                                    aria-labelledby="pills-history-tab">
                                    <h2 class="mb-3 text-primary fw-bold">Our History</h2>
                                    <p>Our journey began with a mission to bridge the gap between surplus medicines and those in
                                        need. Recognizing the widespread issue of medicine waste, we set out to create a
                                        platform that connects donors and NGOs seamlessly.</p>
                                    <p>Over time, we have grown into a trusted network dedicated to reducing waste and promoting
                                        equitable healthcare. Every step of our journey reflects our commitment to making unused
                                        medicines a lifeline for communities in need.</p>
                                    <p class="mt-5">
                                        <a href="donate_medicine.html" class="btn btn-primary me-4">Start Donating</a>
                                        <a href="about.html" class="link-more">Learn More <span
                                            class="icon-chevron-right"></span></a>
                                    </p>
                                </div>

                            </div>

                        </div>
                        <div class="col-lg-6">
                            <div class="overlap-imgs">
                                <img src="images/img_v_2-min.jpg" alt="Image" className="img-fluid rounded" data-aos="fade-up"
                                    data-aos-duration="100" />
                                <img src="images/img_v_3-min.jpg" alt="Image" className="img-fluid rounded" data-aos="fade-up" data-aos-duration="100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4