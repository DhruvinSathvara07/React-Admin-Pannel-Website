import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faUsers } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
    faDollarSign: faDollarSign,
    faUsers: faUsers
};

const Section1 = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/HomeHeroSection");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div>
            <div
                className="hero overlay"
                style={{
                    backgroundImage: "url('images/hero_2.jpg')",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-lg-10">
                            {data.map((item) => (
                                <div key={item.id}>
                                    <h1 className="heading text-white mb-2" data-aos="fade-up" data-aos-delay="100">
                                        {item.title}
                                    </h1>
                                    <p data-aos="fade-up" className="mb-5 text-white lead text-white-50" data-aos-delay="200">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                            <p data-aos="fade-up" data-aos-delay="300"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
