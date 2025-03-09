import React, { useEffect, useState } from 'react'
import DonateBtn from '../Components/DonateBtn'
import axios from 'axios';

const Section1 = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3001/About');
        console.log(response.data)
        setData(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div className="hero overlay" style={{
                backgroundImage: "url('images/Donate_med/third_sec_4.jpg')",
                backgroundSize: "cover",
            }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        { data.map((item, index) => (
                            <div key={index} className="col-lg-8 d-flex flex-column align-items-center text-center text-items">
                                <h1 className="about-heading text-white mb-2" data-aos="fade-up">{item.aboutheading}</h1>
                                <p data-aos="fade-up" className="mb-5 text-white lead text-white-50">{item.aboutpara}</p>
                                <DonateBtn />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1