import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import ProfilePic2 from "../Assets/istockphoto-2060009001-612x612-removebg-preview.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Our customers love sharing their experiences with us. Here's what some of them have to say about our products and services:
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        The gift shop exceeded my expectations! The quality of the products and the level of customer service were outstanding. I will definitely be a repeat customer.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Chetan</h2>
      </div>
      <div className="testimonial-section-bottom">
      <img src={ProfilePic2} alt="" width="117" height="117" />
        <p>
        Excellent service and high-quality products. I appreciated the prompt communication from the support team and the seamless ordering process. Will shop here again!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Khushboo</h2>
      </div>
    </div>
  );
};

export default Testimonial;