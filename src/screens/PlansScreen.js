import React, { useState } from "react";
import "./PlansScreen.css";

const PlansScreen = () => {
  return (
    <div className="plansScreen">
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Premium</h5>
          <h6>4k + HDR</h6>
        </div>
        <div className="button__container">
          <button className="button">Subscribe</button>
        </div>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <div className="button__container">
          <button className="button">Subscribe</button>
        </div>
      </div>
      <div className="plansScreen__plan">
        <div className="plansScreen__info">
          <h5>Standards</h5>
          <h6>1080p</h6>
        </div>
        <div className="button__container">
          <button className="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PlansScreen;
