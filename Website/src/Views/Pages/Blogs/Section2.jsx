import React from 'react';

const Section2 = () => {
    return (
        <div className="container-fluid py-5">
            <div className="row">
                {/* Left Column */}
                <div className="col-lg-3 col-md-4 col-sm-12 ms-lg-5">
                    <h6 className="section2-h6 px-4 py-1 rounded-pill text-warning">
                        INSTAGRAM
                    </h6>
                    <h2 className="section2-h2 mt-3 fs-2 fs-md-3 fs-lg-4">
                        Follow Us <br /> for <br /> Updates
                    </h2>
                </div>

                {/* Right Column */}
                <div className="col-lg-8 col-md-8 col-sm-12 mt-3 mt-lg-0 pt-lg-4">
                    <p className="section2-p">
                        Discover how unused medicines are making a difference in the lives of many. Stay
                        updated with our latest initiatives and success stories.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section2;
