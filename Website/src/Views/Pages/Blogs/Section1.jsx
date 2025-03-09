import axios from "axios";
import React, { useEffect, useState } from "react";

const Section1 = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:3001/BlogTitle");
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container-fluid blog">
        <div className="row">
          <div className="col-lg-12 text-center mt-5 pt-5">
            <h6 className="blog-h6 px-4 py-1 rounded-pill">BLOGS</h6>
            {data.map((item, index) => (
              <div key={index}>
                <h1 className="blog-heading mt-2 lh-sm ">{item.BlogTitle}</h1>
                <p className="blog-p w-75 fs-4">{item.Blogdescription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
