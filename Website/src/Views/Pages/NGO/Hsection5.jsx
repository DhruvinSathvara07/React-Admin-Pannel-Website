import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PartnerCard2 from '../Components/PartnerCard2';

const Hsection5 = () => {
    const [card, setcard] = useState([]);

    const fetchingData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/PartnerCard2');
            setcard(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchingData();
    }, []);

    return (
        <>
            <div className="py-5 section bg-light our-partners">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="box4 text-center mt-3 mb-4 display-4 heading">Our Partners</h2>
                    <p className=" text-center text-muted mb-5 section_txt">
                        Together, we are making a lasting impact in communities. Meet the NGOs that help us bring hope to those
                        in need.
                    </p>

                    <div className="row text-center">
                        <div className="row">
                            {card.map((cardItem, index) => (
                                <PartnerCard2
                                    key={index}
                                    images={cardItem.images}
                                    cardtitle={cardItem.name}   // Corrected: cardtital -> cardtitle
                                    cardText={cardItem.description} // Corrected: cardTexts -> cardText
                                />
                            ))}
                        </div>
                    </div>

                    <div className="row text-center mt-5">
                        <div className=" col-12">
                            <p>If you're an NGO looking to make a difference, <a href="#register-now"
                                className="box4 ">partner with us today !</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hsection5;
