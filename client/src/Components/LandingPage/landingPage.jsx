import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="container-h1">
        <h1 className="welcome">Welcome to Pokemon Land</h1>
      </div>
      <div className="container-button">
        <Link to="/home">
          <button className="button">Join!</button>
        </Link>
      </div>
    </div>
  );
}
