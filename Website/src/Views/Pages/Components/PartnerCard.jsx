import React from 'react'

const PartnerCard = ({ image, cardtital, cardText }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="card h-100 border-0 shadow-sm py-5">
                    <img src={image} className="card-img-top img-fluid card-img"
                        alt="Expand Your Reach" />
                    <div className="card-body text-center">
                        <h5 className="card-title my-3 fs-4" >{cardtital}</h5>
                        <p className="card-text px-lg-3">
                            {cardText}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PartnerCard
