import axios from "axios";
import React, { useEffect, useState } from "react";

const Section2 = () => {
  const [getdata, setgetdata] = useState([]);

  const gettingdata = async (data) => {
    const result = await axios.get("http://localhost:3001/posts", data);
    // console.log(result.data);
    setgetdata(result.data);
  };
  useEffect(() => {
    gettingdata();
  }, []);

  return (
    <div>
      <section>
        <div className="container-fluid  why-donate  pt-5 py-5">
          <div className="container mt-3   justify-content-center  align-item-center  py-5">
            <div className="row    mt-2 ">
              <div className="col-lg-12 ">
                <h1
                  className=" text-center  display-5 text-success  fw-bold"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  {" "}
                  Why Donate?
                </h1>
                <p
                  className="text-center fs-5  mt-3  "
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Your small step can make a big difference. Here's why it
                  matters.
                </p>
              </div>
              {/* why Donate - Card  */}

              <div className="row mt-5 pt-5 ">
                {getdata.map((item, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 d-flex  ">
                      <div
                        className="card p-4 ms-4 "
                        data-aos="flip-right"
                        key={index}
                      >
                        <img
                          src={item.Cardimg}
                          className="card-img-top mt-2 img-fluid"
                          alt="..."
                        />
                        <div className="card-body text-center">
                          <p className="card-text  mt-3 ">{item.CardDate}</p>
                          <h5 className="card-title text-dark fs-3 ">
                            {item.CardHeading}
                          </h5>
                          <p className="card-text  mt-3 ">
                            {item.Cardpargraph}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
