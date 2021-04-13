import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection(props) {
  return (
    <div className="hero-container">
      <video src="/videos/wall.mp4" autoPlay loop muted />
      <h1>SM VITA</h1>
      <p>Innovation. Tutelage. Perseverance</p>
      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
