import React, { useState } from "react";
import axios from "axios";
// import "./VisitUsForm.css"; // Create this CSS file for styling the form

const VisitUsForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/visit-us", { name, contact, address });
      alert("Our support will contact you soon");
      setName("");
      setContact("");
      setAddress("");
    } catch (error) {
      console.error("There was an error submitting your details:", error);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
      <h2>Contact Information</h2>
      {/* <br /> */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Your Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <br />
        <input
          placeholder="Your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit" className="secondary-button">Submit</button>
      </form>
    </div>
  );
};

export default VisitUsForm;
