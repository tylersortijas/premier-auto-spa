import React from "react";
import { Route, Routes, Link, HashRouter } from "react-router-dom";

import HomeSection from "./components/HomeSection.js";
import Soldeguard from "./components/SoldeguardSection.js";
import NowHiringSection from "./components/NowHiringSection.js";
import BookNowModel from "./components/BookNowModel.js";
import CarouselData from "./carouselData.js";

function RouteSwitch() {
  return (
    <HashRouter>
      <>
        <nav className="nav-container">
          <img
            src="https://www.premierautospapasadena.com/uploads/b/0dc07a11fc17871c497d06dc02551868cd98327ebff285bebf910264535568b2/IMG_901B9C3470E4-1_1676057924.jpeg?width=2400&optimize=medium"
            alt="Premier Logo"
          />
          <div className="right-side-nav">
            <ul>
              <Link to="/" className="links">
                <li>Home</li>
              </Link>
              <Link /* to="/Soldeguard" */ className="links">
                <li>Soldaguard</li>
              </Link>
              <Link /* to="/Now_Hiring" */ className="links">
                <li>Now Hiring</li>
              </Link>
              <li>
                <button id="book-now-button">Book Now</button>
              </li>
            </ul>
          </div>
        </nav>
      </>
      <Routes>
        <Route path="/" element={<HomeSection slides={CarouselData} />} />
        {/* <Route path="/Soldeguard" element={<Soldeguard />} /> */}
        {/* <Route path="/Now_Hiring" element={<NowHiringSection />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
