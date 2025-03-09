import React, { useEffect, useState } from 'react';
import FlipingCard from '../Components/FlipingCard';
import axios from 'axios';

const Section3 = () => {

    const [data, setData] = useState([]);
    const fetchingData = async () => {
        const flipingCardData = await axios.get("http://localhost:3001/flipCardData");
        setData(flipingCardData.data);
    }

    useEffect(() => {
        fetchingData()
    }, [])
    return (

        <>
            <div className="section flip-section" style={{ backgroundImage: "url('images/img_v_2-min.jpg')" }}>
                <div className="blob-1">
                    <img src="images/blob.png" alt="Image" className="img-fluid" />
                </div>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-7 text-center" data-aos="fade-up">
                            <span className="subheading-white mb-3 text-white">Donate Now</span>
                            <h2 className="heading text-white">Make a Difference Today</h2>
                        </div>
                    </div>
                    <div className="row">

                        {
                            data.map((item, index) => {
                                return (
                                    <FlipingCard
                                        key={index}
                                        icon_className={item.icon_className}
                                        card_title={item.card_title}
                                        flip_content={item.flip_content}
                                        flip_content_description={item.flip_content_description}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section3;
