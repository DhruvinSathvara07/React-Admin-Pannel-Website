import React, { useEffect, useState } from 'react'
import PartnerCard from '../Components/PartnerCard'
import axios from 'axios';

const Hsection2 = () => {
    const [cardImages, setcardImages] = useState([]);

    const fetchingData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/PartnerCard');
            setcardImages(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchingData();
    }, []);
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12" data-aos="fade-up" data-aos-delay="100">
                            <h2 className="box4 text-center mt-3 mb-4 display-4 heading">Why Partner with Us?</h2>
                            <p className="text-center text-muted mb-4 section_txt">
                                Join a community of changemakers repurposing surplus medicines to create healthier communities
                                and reduce waste.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {cardImages.map((card, index) => (
                            console.log('Rendering Card:', card.image),
                            <PartnerCard
                                key={index}
                                image={card.image}
                                cardtital={card.title}
                                cardText={card.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hsection2
