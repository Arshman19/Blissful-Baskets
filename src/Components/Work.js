import React from "react";
import PickMeals from "../Assets/Screenshot_2024-07-25_130732-removebg-preview.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Reach out to us",
      text: "Our support team will contact you shortly.",
    },
    {
      image: ChooseMeals,
      title: "Choose",
      text: "We'll provide details of all products that match your requirements, along with their prices. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Confirm your order and have it delivered.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        {/* <p className="primary-text">
        Reach out to us via our website<br></br>
        Our support team will contact you shortly.<br></br>
        We'll provide details of all products that match your requirements, along with their prices.<br></br>
        Confirm your order and have it delivered.<br></br>
      </p> */}
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
            <img src={data.image} alt="" width="226" height="266" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;