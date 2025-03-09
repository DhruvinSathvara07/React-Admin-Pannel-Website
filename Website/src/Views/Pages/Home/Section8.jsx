import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from '../Components/BlogCard';

const Section8 = () => {
    const [blogData, setBlogData] = useState([]);

    const fetchingData = async () => {
        const result = await axios.get('http://localhost:3001/blogs');
        setBlogData(result.data);
    };

    useEffect(() => {
        fetchingData();
    }, []);

    return (
        <div className="section bg-light pt-0">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-5 mb-5" data-aos="fade-up">
                        <span className="subheading mb-1">Blog Updates</span>
                        <h2 className="heading mb-1">Our Blog</h2>
                        <p>Stay updated with the latest stories, updates, and insights on how unused medicines are making a
                            difference in the lives of people in need.</p>
                    </div>
                </div>
                <div className="row">
                    {blogData.map((blog, index) => (
                        <BlogCard
                            key={index}
                            blog_date={blog.blog_date}
                            blog_img={blog.blog_img}
                            blog_title={blog.blog_title}
                            blog_description={blog.blog_description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section8;
