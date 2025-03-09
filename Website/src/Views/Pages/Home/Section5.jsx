import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Section5() {
    const swiperRef = useRef(null);
    const [initiatives, setInitiatives] = useState([]);

    const fetchingData = async () => {
        const result = await axios.get("http://localhost:3001/Swiping-images");
        setInitiatives(result.data);
    }

    useEffect(() => {
        fetchingData()
    }, [])

    return (
        <div className="section cause-section bg-light">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-delay="100">
                        <span className="subheading mb-3">Highlights</span>
                        <h2 className="heading">Featured Initiatives</h2>
                        <p>Join us in transforming unused medicines into life-saving resources for those in need. Together, we make a difference.</p>
                        <div className="mt-4 d-flex justify-content-center">
                            <button className="btn btn-primary me-2" onClick={() => swiperRef.current.swiper.slidePrev()}>Prev</button>
                            <button className="btn btn-primary" onClick={() => swiperRef.current.swiper.slideNext()}>Next</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {initiatives.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="causes-item bg-white">
                                <a href="#"><img src={item.image} alt="Image" className="img-fluid mb-4 rounded" /></a>
                                <div className="px-4 pb-5 pt-3">
                                    <h3><a href="#">{item.title}</a></h3>
                                    <p>{item.description}</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar" role="progressbar" style={{ width: `${item.progress}%` }} aria-valuenow={item.progress} aria-valuemin="0" aria-valuemax="100">{item.progress}%</div>
                                    </div>
                                    <div className="d-flex mb-4 justify-content-between amount">
                                        <div>{item.donations}</div>
                                        <div>{item.needed}</div>
                                    </div>
                                    <div>
                                        <a href={item.link} className="btn btn-primary">{item.buttonText}</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Section5;
