// import React from "react";

// const Contact = () => {
//   return (
//     <div className="contact-page-wrapper">
//       <h1 className="primary-heading">Have Question In Mind?</h1>
//       <h1 className="primary-heading">Let Us Help You</h1>
//       <div className="contact-form-container">
//         <input type="text" placeholder="yourmail@gmail.com" />
//         <button className="secondary-button">Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", { email, query });
      alert("Your query has been submitted and you will be contacted soon.");
      setEmail("");
      setQuery("");
    } catch (error) {
      console.error("There was an error submitting your query:", error);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="yourmail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="query">Your Query</label>
          <input
            id="query"
            placeholder="Type your query here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <br />
          <button type="submit" className="secondary-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
