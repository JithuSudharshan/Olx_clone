import React from "react";
import "../Footer/Footer.css";
import facbook_icon from "../../assets/Images/Card_image/facebook_icon.svg";
import instagram_icon from "../../assets/Images/Card_image/instagram_icon.svg";
import youtube_icon from "../../assets/Images/Card_image/youtube_icon.svg";
import whatsapp_icon from "../../assets/Images/Card_image/whatsapp_icon.svg";
import twitter_icon from "../../assets/Images/Card_image/twitter_icon.svg";
import linkedin_icon from "../../assets/Images/Card_image/linkedin_icon.svg";
import playstore_icon from "../../assets/Images/Card_image/playstore.png";
import appstore_icon from "../../assets/Images/Card_image/appstore.png";
import carTradeGroup_logo from "../../assets/Images/Card_image/cartrade_tech.svg";
import olx_logo from "../../assets/Images/Card_image/olx_2025.svg";
import carwale_logo from "../../assets/Images/Card_image/carwale.svg";
import bikewale_logo from "../../assets/Images/Card_image/bikewale.svg";
import cartrade_logo from "../../assets/Images/Card_image/cartrade.svg";
import mobility_logo from "../../assets/Images/Card_image/mobility.svg";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer_1">
        <section className="main-section">
          <section className="section_1">
            <h4>POPULAR LOCATIONS</h4>
            <p>Kolkata</p>
            <p>Mumbai</p>
            <p>chennai</p>
            <p>Pune</p>
          </section>
          <section className="section_2">
            <h4>RENDING LOCATIONS</h4>
            <p>Bhuvaneshwar</p>
            <p>Hyderabad</p>
            <p>Chandigarh</p>
            <p>Nashik</p>
          </section>
          <section className="section_3">
            <h4>About Us</h4>
            <p>Tech@OLX</p>
            <p>Careers</p>
          </section>
          <section className="section_4">
            <h4>OLX</h4>
            <p>Blog</p>
            <p>Help</p>
            <p>Sitemap</p>
            <p>Legal & Privacy information</p>
            <p>Vulnerability Disclosure Program</p>
          </section>
        </section>
        <div className="footer-right">
          <p>FOLLOW US</p>
          <div className="social_handles">
            <img src={facbook_icon} alt="" />
            <img src={instagram_icon} alt="" />
            <img src={youtube_icon} alt="" />
            <img src={twitter_icon} alt="" />
            <img src={whatsapp_icon} alt="" />
            <img src={linkedin_icon} alt="" />
          </div>
          <div className="download_app">
            <img src={playstore_icon} className="playstore_icon" alt="" />
            <img src={appstore_icon} className="appstore_icon" alt="" />
          </div>
        </div>
      </div>
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
export default Footer;
