import React from 'react'

const PartnerCard2 = ({ images, cardtitle, cardText }) => { // Fixed props
    return (
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <img src={images} alt={cardtitle} className="img-fluid mb-3 partner-logo" />
            <h4 className="h5">{cardtitle}</h4>  {/* Corrected from cardtitals */}
            <p className="text-muted px-lg-3"> {cardText}</p>  {/* Corrected from cardTexts */}
            <a href="https://www.prayaspune.org/" target="_blank" className="btn btn-outline-primary">Learn More</a>
        </div>
    )
}

export default PartnerCard2;
