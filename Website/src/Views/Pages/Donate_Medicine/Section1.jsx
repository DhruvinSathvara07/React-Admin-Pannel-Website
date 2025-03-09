import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Section1 = () => {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  const [getdata, setgetdata] = useState([]);

  const gettingdata = async () => {
    try {
      const result = await axios.get("http://localhost:3001/heading");
      setgetdata(result.data);
      console.log(result.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    gettingdata();
  }, []);

  return (
    <div>
      <section className="">
        <div
          className="container-fluid hero-page pt-5 "
          style={{
            height: "100vh",
            backgroundImage: "url('images/Donate_med/h1_hero.jpg')",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundBlendMode: "color",
          }}
        >
          <div className="container mt-5 pt-5 d-flex  ">
            <div className="row justify-content-center align-item-center  mt-5  ">
              {getdata.map((item, index) => {
                return (
                  <div
                    className="col-lg-10 mt-5 pt-5 text-center "
                    data-aos="fade-up"
                    key={index}
                  >
                    <h1 className="display-3 fw-bold herotitle  text-white">
                      {" "}
                      {item.herotitle}
                    </h1>
                    <p className="pg-content text-center fs-5 heropara text-white mt-3">
                      {item.heropara}
                    </p>
                    <button className="btn btn-success rounded-pill px-5 py-3 mt-4">
                      Donate Now
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
