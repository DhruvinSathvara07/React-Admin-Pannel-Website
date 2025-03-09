import React, { useEffect, useState } from "react";
import DonateBtn from "../Components/DonateBtn";
import axios from "axios";

const Section1 = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/Contact");
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div
        className="hero overlay"
        style={{
          backgroundImage: "url('images/Donate_med/second_sec_1.jpeg')",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {data &&
              data.map((item, index) => (
                <div
                  className="col-lg-8 d-flex flex-column align-items-center text-center text-items"
                  key={index}
                >
                  <h1
                    className="heading contact-heading text-white mb-2"
                    data-aos="fade-up"
                  >
                    {item.contactheading}
                  </h1>
                  <p
                    data-aos="fade-up"
                    className=" mb-5 contact-para about-para text-white lead text-white-50"
                  >
                    {item.contactpara}
                  </p>
                  <DonateBtn />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
