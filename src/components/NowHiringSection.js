import React from "react";
import Footer from "./Footer.js";

function NowHiringSection() {
  return (
    <div className="hiring-page-container">
      <div className="hiring-content">
        <div className="hiring-text">
          <h2>Apply Now</h2>
          <p>Please provide the following information.</p>
          <p>We'll get back to you as soon as possible.</p>
        </div>
        <div className="hiring-form">
          <form action="#" method="get">
            <input
              type="text"
              placeholder="First Name"
              name="hiringFirstName"
              id="hiringFirstName"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="hiringLastName"
              id="hiringLastName"
              required
            />
            <input
              type="tel"
              placeholder="(123)456-7890"
              name="hiringPhoneNumber"
              id="hiringPhoneNumber"
              required
            />
            <input
              type="text"
              placeholder="Address"
              name="hiringAddress"
              id="hiringAddress"
              required
            />
            <input
              type="date"
              placeholder="Date of Birth"
              name="birthday"
              id="birthday"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NowHiringSection;
