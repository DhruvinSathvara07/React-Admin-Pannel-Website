import React from 'react'

const Section8 = () => {
    return (
        <div>

            <div class="py-5 section faqs">
                <div class="container" data-aos="fade-up" data-aos-delay="100">

                    <h2 class="text-center mt-3 mb-4 display-4 text-success fw-bold">FAQs</h2>
                    <p class="text-center  mb-5 ">
                        Find answers to common questions about our medicine donation process.
                    </p>


                    <div class="accordion accordion-flush  " id="accordionFlushExample">

                        <div class="accordion-item    border border-success   " >
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed  btn-outline-success" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    How do I donate unused medicines?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse bg-dark text-white collapse bg-dark text-white" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    To donate unused medicines, simply log into the system, provide the details of your
                                    medicines,
                                    and submit them for admin verification. Once verified, you can select a convenient time slot
                                    for
                                    the pickup, and you'll receive a confirmation about your donation.
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item  border border-success  mt-3" data-aos="fade-up" data-aos-delay="300">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed  btn-outline-success" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What types of medicines can I donate?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse bg-dark text-white collapse" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    You can donate any unused or opened, unopened, non-expired medicines. This includes
                                    prescription
                                    medications, over-the-counter medicines, and supplements, provided they are in good
                                    condition
                                    and within their expiry date.
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item  border border-success  mt-3" data-aos="fade-up" data-aos-delay="400">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed  btn-outline-success" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Can I donate opened medicines?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse bg-dark text-white collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes, you can donate opened medicines as long as they are still in good condition,
                                    unopened packaging, and within their expiry date. Ensure that the medicine is safe to be
                                    reused by others.
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item  border border-success  mt-3" data-aos="fade-up" data-aos-delay="500">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed  btn-outline-success" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                    Is my personal information safe during the donation process?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse bg-dark text-white collapse" aria-labelledby="flush-headingFour"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Yes, your privacy is important to us. We use secure systems to protect your personal
                                    information and ensure that it is only used for donation-related purposes.
                                </div>
                            </div>
                        </div>


                        <div class="accordion-item   border border-success  mt-3" data-aos="fade-up" data-aos-delay="600">
                            <h2 class="accordion-header" id="flush-headingFive">
                                <button class="accordion-button collapsed  btn-outline-success" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFive" aria-expanded="false"
                                    aria-controls="flush-collapseFive">
                                    How will I know if my donation is accepted?
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse bg-dark text-white collapse" aria-labelledby="flush-headingFive"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    Once you submit your medicine details, our admin will review the information. If
                                    approved, you'll be notified about your donation status and the scheduled pickup time.
                                    If rejected, you'll be informed with the reason for rejection.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section8