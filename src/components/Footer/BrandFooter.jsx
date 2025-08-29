import React from "react";
import "../Footer/BrandFooter.css";
import carTradeGroup_logo from "../../assets/Images/Card_image/cartrade_tech.svg";
import olx_logo from "../../assets/Images/Card_image/olx_2025.svg";
import carwale_logo from "../../assets/Images/Card_image/carwale.svg";
import bikewale_logo from "../../assets/Images/Card_image/bikewale.svg";
import cartrade_logo from "../../assets/Images/Card_image/cartrade.svg";
import mobility_logo from "../../assets/Images/Card_image/mobility.svg";

const BrandFooter = () => {
  return (
    <div className="footer-main">
      <div className="footer_2">
        <div className="brand-banner">
          <div className="group-icon">
            <img src={carTradeGroup_logo} alt="" />
          </div>
          <div className="rest-logo">
            <img src={cartrade_logo} alt="" />
            <img src={olx_logo} alt="" />
            <img src={carwale_logo} alt="" />
            <img src={bikewale_logo} alt="" />
            <img src={cartrade_logo} alt="" />
            <img src={mobility_logo} alt="" />
          </div>
        </div>
        <div className="copright">
          <p>help-sitemap</p>
          <p>All rights reserved © 2006-2025 OLX</p>
        </div>
      </div>
    </div>
  );
};
export default BrandFooter;
