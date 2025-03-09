import axios from "axios";
import React, { useState, useEffect } from "react";

const Section2 = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/About");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="section mt-5 pt-5 py-5 sec-about">
      <div className="container">
        <div className="row g-5 justify-content-between">
          {data &&
            data.map((item, index) => (
              <div className="row g-5 justify-content-between" key={index}>
                <div className="col-lg-6 " data-aos="fade-right">
                  <img
                    src={item["aboutimg"] || "placeholder.jpg"}
                    alt="About"
                    className="img-fluid about-img img-box-shadow rounded"
                  />
                </div>
                <div
                  className="col-lg-5 align-self-center"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <span className="subheading mb-3">
                    {item.subheading || "Default Subheading"}
                  </span>
                  <h2 className="heading mission-heading mb-4">
                    {item["missionheading"] || "Default Heading"}
                  </h2>
                  <p className="our-mission-para">
                    {item.ourmissionpara || "Default mission paragraph."}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
