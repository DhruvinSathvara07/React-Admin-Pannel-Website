import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Hsection1 = () => {
    const [heroData, setHeroData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/NGO_Hero_Section");
            setHeroData(response.data);
        } catch (error) {
            console.error("Error fetching hero section data:", error);
        }
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
        fetchData();
    }, []);

    return (
        <>
            <div className="hero overlay"
                style={{
                    backgroundImage: "url('images/Hero_sec.jpg')",
                    backgroundSize: "cover",
                }}>
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-lg-8 hero-text">
                            {heroData.map ((item)=>(
                                <>
                               
                               <h1 className="heading text-white mb-3" data-aos="fade-up" data-aos-delay="100">
                                   {item.title}
                               </h1>
                               <p className="mb-4 text-white-50 lead" data-aos="fade-up" data-aos-delay="200">
                                   {item.description}
                               </p>
                              </>
                            )  
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hsection1;
