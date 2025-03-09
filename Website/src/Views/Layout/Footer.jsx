import React from 'react'
import '../../assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <div className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                        <div className="widget">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled float-left links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Donate Medicine</a></li>
                                <li><a href="#">NGO</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-6 col-lg-5">
                        <div className="widget">
                            <h3>Contact</h3>
                            <address>123 Charity Lane, Ahmedabad, Gujarat 380001</address>
                            <ul className="list-unstyled links mb-4">
                                <li><a href="tel:+919998888777">+91 999 8888 777</a></li>
                                <li><a href="tel:+919001234567">+91 900 1234 567</a></li>
                                <li><a href="mailto:medic-aid@medicine-donation.org" style={{ whiteSpace: "nowrap" }}>
                                    medic-aid@medicine-donation.org</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                        <div className="widget">
                            <h3>Follow Us</h3>
                            <ul className="list-unstyled social text-center">
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12 text-center">
                        <p className="copyright">
                            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.
                            <br />
                            Made with ❤️ for a healthier tomorrow by <b>D.N.SATHVARA</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
