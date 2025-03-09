// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const Section9 = () => {
//     return (
//         <div className="section sec-instagram pb-0">
//             <div className="container mb-5">
//                 <div className="row align-items-center">
//                     <div className="col-lg-3" data-aos="fade-up">
//                         <span className="subheading mb-3">Instagram</span>
//                         <h2 className="heading">Follow Us for Updates</h2>
//                     </div>
//                     <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
//                         <p>
//                             Discover how unused medicines are making a difference in the lives
//                             of many. Stay updated with our latest initiatives and success
//                             stories.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Swiper Slider */}
//             <div
//                 className="instagram-slider-wrap"
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//                 style={{ overflow: "hidden" }} // Prevent left/right images from showing
//             >
//                 <Swiper
//                     modules={[Autoplay, Pagination, Navigation]}
//                     slidesPerView={4}
//                     spaceBetween={20}
//                     loop={true}
//                     autoplay={{ delay: 3000 }}
//                     pagination={{ clickable: true, el: ".swiper-pagination" }}
//                     navigation={false} // Hide navigation arrows
//                     breakpoints={{
//                         320: { slidesPerView: 1 },
//                         480: { slidesPerView: 2 },
//                         768: { slidesPerView: 3 },
//                         1024: { slidesPerView: 4 },
//                     }}
//                     className="instagram-slider"
//                 >
//                     {Array.from({ length: 8 }).map((_, index) => (
//                         <SwiperSlide key={index}>
//                             <a className="instagram-item">
//                                 <span className="icon-instagram"></span>
//                                 <img
//                                     src={`images/Instagram section/insta_${index + 1}.jpg`}
//                                     alt={`Instagram ${index + 1}`}
//                                     className="img-fluid"
//                                     style={{ margin: 0 }} // Ensuring no extra margin
//                                 />
//                             </a>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//                 {/* Custom Pagination */}
//                 <div className="swiper-pagination" style={{ textAlign: "center" }}></div>
//             </div>
//         </div>
//     );
// };

// export default Section9;
