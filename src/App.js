import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="super-over-league-container">
      <h1 className="heading">SuperOverLeague</h1>
      <div className="teams-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
          className="logo-image"
          alt="pic"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
          className="logo-image"
          alt="pic1"
        />
      </div>
    </div>
  );
};

export default App;
