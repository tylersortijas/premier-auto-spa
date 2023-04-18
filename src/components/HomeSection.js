import { React, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import HomePageBackground from "../images/home-page-background.avif";
import Location from "../images/location.jpg";
import LuxuryWash from "../images/luxury-wash.jpeg";
import LuxuryInterior from "../images/luxury-interior.jpg";
import Enhance from "../images/enhance-package.webp";
import Renew from "../images/renew.jpg";
import SportsWash from "../images/sport-wash.jpeg";
import ThePasadena from "../images/the-pasadena.webp";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function HomeSection(props) {
  const { slides } = props;
  const length = slides.length;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="home-page-container">
      <div className="home-title-container">
        <img src={HomePageBackground} alt="Clean Acura NSX" />
        <div className="home-title-text">
          <h1>Experience a new type of clean</h1>
          <h2>The highest quality hand wash and detailing service</h2>
        </div>
        <div className="home-title-buttons">
          <button id="title-book-now">Book Now</button>
          <button id="title-learn-more">Learn More</button>
        </div>
      </div>
      <div className="home-packages">
        <h1>- Services & Packages -</h1>
        <div className="home-package-deals-container">
          <div className="home-package-left-column">
            <figure className="packages">
              <img src={LuxuryWash} alt="Luxury Wash" />
              <figcaption>Luxury Wash</figcaption>
            </figure>
            <figure className="packages">
              <img src={LuxuryInterior} alt="Luxury Interior"></img>
              <figcaption>Luxury Interior</figcaption>
            </figure>
            <figure className="packages">
              <img src={Enhance} alt="Enhance Package" />
              <figcaption>Enhance</figcaption>
            </figure>
          </div>
          <div className="home-package-right-column">
            <figure className="packages">
              <img src={Renew} alt="Renew Package" />
              <figcaption>Renew</figcaption>
            </figure>
            <figure className="packages">
              <img src={SportsWash} alt="Sports Wash" />
              <figcaption>Sports Wash</figcaption>
            </figure>
            <figure className="packages">
              <img src={ThePasadena} alt="The Pasadena" />
              <figcaption>The Pasadena</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="home-page-carousel-container">
        <h1>- Our Past Work -</h1>
        <div className="home-page-carousel">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    src={slide.image}
                    alt="Clean Cars"
                    className="carousel-image"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="home-page-location-container">
        <Link to="https://www.google.com/maps/dir/?api=1&destination=30+Union+Street+Pasadena+CA+91103">
          <img src={Location} alt="Map Location" />
        </Link>
        <div className="home-page-location-info">
          <div className="location-title">
            <h1>Location & Hours</h1>
            <h2>Located in Parking Garage</h2>
          </div>
          <div className="home-page-address-hours-container">
            <div className="home-page-address">
              <p>Premier Auto Spa</p>
              <p>30 Union Street</p>
              <p>Pasadena, California 91103</p>
              <p>(626)720-7761</p>
              <p>info@1coloradowash.com</p>
              <button id="get-directions-button">
                <a href="https://www.google.com/maps/dir/?api=1&destination=30+Union+Street+Pasadena+CA+91103">
                  Get Directions
                </a>
              </button>
            </div>
            <div className="home-page-hours">
              <p>Monday 8:00 am - 6:00 pm</p>
              <p>Tuesday 8:00 am - 6:00 pm</p>
              <p>Wednesday 8:00 am - 6:00 pm</p>
              <p>Thursday 8:00 am - 6:00 pm</p>
              <p>Friday 8:00 am - 6:00 pm</p>
              <p>Saturday 8:00 am - 6:00 pm</p>
              <p>Sunday 8:00 am - 6:00 pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-page-user-information">
        <div className="user-information-header">
          <h2>Hours Subjected to Change on Rainy Days</h2>
          <p>
            Inquiry related to Custom Appointments may be discussed over the
            phone
          </p>
        </div>
        <form action="#" method="get">
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            name="firstName"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            required
          />
          <input
            type="tel"
            placeholder="(123)456-7890"
            id="telephone"
            name="telephone"
            required
          />
          <button type="submit" id="user-info-submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default HomeSection;
