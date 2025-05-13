import React from "react";
import "../../assets/css/style.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav className="site-nav">
          <div className="container">
            <div className="menu-bg-wrap">
              <div className="site-navigation">
                <div className="row g-0 align-items-center">
                  <div className="col-2">
                    <a
                      onClick={() => navigate("/")}
                      className="logo m-0 float-start text-light"
                      style={{ cursor: "pointer" }}
                    >
                      MedicAid
                    </a>
                  </div>
                  <div className="col-8 text-center">
                    <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                      <li className="active">
                        <a
                          onClick={() => navigate("/")}
                          style={{ cursor: "pointer" }}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/donate")}
                        >
                          Donate Medicine
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/ngo")}
                        >
                          NGO
                        </a>
                      </li>
                      <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/blogs")}
                        >
                          Blog
                        </a>
                      </li>
                      {/* <li>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/about")}
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/contact")}
                          style={{ cursor: "pointer" }}
                        >
                          Contact
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="col-2 text-end">
                    <a className="call-us d-flex align-items-center">
                      <i className="fa-solid fa-phone me-2"></i>
                      <span className="ms-2">900-123-4567</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
