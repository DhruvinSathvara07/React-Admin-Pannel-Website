import React from "react";
import "./Card.css";

const Card = ({ card_title, description, linkText, className }) => {
    return (
        <div className="col-lg-6 mt-4" data-aos="fade-up">
            <div className={`card-content ${className}`}>
                <h2 className="mb-3">{card_title}</h2>
                <p className="mb-4 lead">{description}</p>
                <p>
                    <a className="link-underline">
                        {linkText}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Card;
