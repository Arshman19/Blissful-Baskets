import React, { useState } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import VisitUsForm from "./VisitUsForm";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleVisitUsClick = () => {
    setShowForm(true);
  };

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Discover the Perfect Gift for Every Occasion
          </h1>
          <p className="primary-text">
            Start exploring our delightful collection and make every moment special with the perfect gift from Delightful Gifts. Happy gifting!
          </p>
          <button className="secondary-button" onClick={handleVisitUsClick}>
          Get in touch and discover our products!<FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      {showForm && <VisitUsForm />}
    </div>
  );
};

export default Home;
