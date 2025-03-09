import React from 'react'

function Hsection6() {
    return (
        <div className="py-5 mb-5 section faqs">
            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <h2 className="text-center mt-3 mb-4 display-4 heading">FAQs</h2>
                <p className="text-center text-muted mb-5 section_txt">
                    Find answers to common questions about partnering with us as an NGO.
                </p>


                <div className="accordion accordion-flush" id="accordionFlushNGO">

                    <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="accordion-header border border-primary" id="flush-headingOneNGO">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOneNGO" aria-expanded="false"
                                aria-controls="flush-collapseOneNGO">
                                How can my NGO partner with your platform?
                            </button>
                        </h2>
                        <div id="flush-collapseOneNGO" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOneNGO" data-bs-parent="#accordionFlushNGO">
                            <div className="accordion-body">
                                To partner with us, your NGO needs to register on the platform, undergo an approval process,
                                and then you can start receiving donations based on the available medicines.
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
                        <h2 className="accordion-header" id="flush-headingTwoNGO">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwoNGO" aria-expanded="false"
                                aria-controls="flush-collapseTwoNGO">
                                Are there any costs involved in receiving donations?
                            </button>
                        </h2>
                        <div id="flush-collapseTwoNGO" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwoNGO" data-bs-parent="#accordionFlushNGO">
                            <div className="accordion-body">
                                No, there are no costs involved. The donations are completely free, and you only need to
                                arrange for the collection of the medicines within the given timeframe.
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" data-aos="fade-up" data-aos-delay="400">
                        <h2 className="accordion-header" id="flush-headingThreeNGO">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThreeNGO" aria-expanded="false"
                                aria-controls="flush-collapseThreeNGO">
                                How do I know if my NGO is eligible for donations?
                            </button>
                        </h2>
                        <div id="flush-collapseThreeNGO" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThreeNGO" data-bs-parent="#accordionFlushNGO">
                            <div className="accordion-body">
                                Once you register, our team reviews your application. After approval, your NGO will be
                                eligible for receiving donation notifications whenever medicines are available.
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" data-aos="fade-up" data-aos-delay="500">
                        <h2 className="accordion-header" id="flush-headingFourNGO">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFourNGO" aria-expanded="false"
                                aria-controls="flush-collapseFourNGO">
                                How is the donation collection process managed?
                            </button>
                        </h2>
                        <div id="flush-collapseFourNGO" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFourNGO" data-bs-parent="#accordionFlushNGO">
                            <div className="accordion-body">
                                When a donation is assigned to your NGO, a volunteer will be assigned for the pickup. You’ll
                                be notified of the pickup schedule, and the volunteer will come to collect the medicines
                                from
                                the donor's location.
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" data-aos="fade-up" data-aos-delay="600">
                        <h2 className="accordion-header" id="flush-headingFiveNGO">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFiveNGO" aria-expanded="false"
                                aria-controls="flush-collapseFiveNGO">
                                How will I know if a donation request is available for my NGO?
                            </button>
                        </h2>
                        <div id="flush-collapseFiveNGO" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFiveNGO" data-bs-parent="#accordionFlushNGO">
                            <div className="accordion-body">
                                You will receive a notification when a donation is available in your area. You can then
                                respond to the request and arrange for the collection if it is assigned to your NGO.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hsection6
