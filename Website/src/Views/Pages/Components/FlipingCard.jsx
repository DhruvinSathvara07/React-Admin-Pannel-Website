import React from 'react'

const FlipingCard = ({ card_title, icon_className, flip_content_description }) => {
    return (
        <>
            <div className="col-lg-3 position-relative" data-aos="fade-up" data-aos-delay="100">
                <div className="card-flip">
                    <div className="flip">
                        <div className="front">
                            <div className="flip-content-wrap">
                                <span className="icon-medkit">
                                    <i className={`fas ${icon_className}`}></i>
                                </span>
                                <h3>{card_title}</h3>
                            </div>
                        </div>
                        <div className="back">
                            <div className="flip-content-wrap">
                                <h3>{card_title}</h3>
                                <p>{flip_content_description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlipingCard