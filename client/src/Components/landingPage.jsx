import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to Pokemon Land</h1>
      <Link to="/home">
        <button>Join!</button>
      </Link>

      <h3>
        This Individual Project was created by Rocio Garcia Lofrano for Henry
        Full Stack Developer Academy, hope you like it.
      </h3>
    </div>
  );
}
