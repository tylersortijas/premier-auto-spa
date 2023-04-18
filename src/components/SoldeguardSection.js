import React from "react";
import Footer from "./Footer.js";

function Soldeguard() {
  return (
    <div className="soldeguard-container">
      <div className="soldeguard-content">
        <div className="soldeguard-text-container">
          <h1>Soldaguard</h1>
          <p>
            A dry, non-toxic solution, that kills harmful pathogens, neutralizes
            orders and last for 30 days. Safe for Vehicles, RVs, and Living
            Spaces.
          </p>
        </div>
        <div className="soldeguard-video-container">
          <video>
            <source />
          </video>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Soldeguard;
