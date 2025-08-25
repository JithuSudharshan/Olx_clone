import React from "react";
import "../Navband/NavBand.css";
import angle_icon from "../../assets/angle_icon.svg";

const NavBand = () => {
  return (
    <div className="main">
      <div className="main-container">
        {" "}
        <div className="category">
          <h5>ALL CATEGORIES</h5>
          <img src={angle_icon} alt="" />
        </div>
        <div className="rest-list">
          <p>Cars</p>
          <p>Motorcycles</p>
          <p>Mobile Phones</p>
          <p>For Sale: Houses & Apartments</p>
          <p>Scooters</p>
          <p>Commercial & Other Vehicles</p>
          <p>For Rent: Houses & Apartments</p>
        </div>
      </div>
    </div>
  );
};

export default NavBand;
