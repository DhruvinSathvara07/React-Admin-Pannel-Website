import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({ blog_date, blog_title, blog_description, blog_img }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="causes-item bg-white">
                <a href="#"><img src={blog_img} alt="Image" className="img-fluid mb-4 rounded" /></a>
                <div className="px-4 pb-3 pt-3">
                    <span className="date">{blog_date}</span>
                    <h3><a href="#">{blog_title}</a></h3>
                    <p>{blog_description}</p>
                    <p>
                        <a href="blog.html" className="d-flex align-items-center more2">
                            <span>Read More</span>
                            <span className="icon-chevron-right">
                                <FontAwesomeIcon icon={faGreaterThan} />
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
