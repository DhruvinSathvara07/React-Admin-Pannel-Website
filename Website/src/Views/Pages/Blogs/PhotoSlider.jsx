import React from "react";

const PhotoSlider = () => {
  return (
    <div>
      <div className="marquee">
        <div className="marquee-content">
          <ul className="list-inline">
            <li>
              <a href="">
                <img
                  className="list-inline"
                  src="public/images/Instagram section/insta_1.jpg"
                  alt="Buy iPhone XS "
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  className="list-inline"
                  src="public/images/Instagram section/insta_2.jpg"
                  alt="Buy iPhone XR"
                />
              </a>
            </li>
            <li>
              <img
                className="list-inline"
                src="public/images/Instagram section/insta_3.jpg"
                alt="Buy iPhone X"
              />
            </li>
            <li>
              <img
                className="list-inline"
                src="public/images/Instagram section/insta_4.jpg"
                alt="Buy iPhone 8"
              />
            </li>
          </ul>
          <ul className="list-inline">
            <li>
              <img
                className="list-inline"
                src="public/images/Instagram section/insta_5.jpg"
                alt="Buy Samsung Galaxy S10"
              />
            </li>
            <li>
              <img
                className="list-inline"
                src="public/images/Instagram section/insta_6.jpg"
                alt="Buy Samsung Galaxy S9"
              />
            </li>
            <li>
              <img
                className="list-inline"
                src="public/images/Instagram section/insta_7.jpg"
                alt="Buy Samsung Galaxy Note 9"
              />
            </li>
            <li>
              <img
                className="list-inline"
                src="public/images/Instagram section/insta_8.jpg"
                alt="Buy Samsung Galaxy Note 8"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
