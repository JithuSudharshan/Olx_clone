import React from "react";
import "./Dropdown.css";
import Profile_picture from "../../assets/Images/Nav-feauture icons/profilePicture.jpeg";
import my_ads_icon from "../../assets/Images/Nav-feauture icons/myAds_icon.svg";
import bussines_icon from "../../assets/Images/Nav-feauture icons/cooperation.png";
import cart_icon from "../../assets/Images/Nav-feauture icons/shopping-cart.png";
import billing_icon from "../../assets/Images/Nav-feauture icons/card.png";
import elite_icon from "../../assets/Images/Nav-feauture icons/star.png";
import help_icon from "../../assets/Images/Nav-feauture icons/question.png";
import language_icon from "../../assets/Images/Nav-feauture icons/language.png";
import settings_icon from "../../assets/Images/Nav-feauture icons/setting.png";
import install_icon from "../../assets/Images/Nav-feauture icons/dowload.png";
import logout_icon from "../../assets/Images/Nav-feauture icons/power-off.png";
import { Link } from "react-router";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="profile-picture">
        <img src={Profile_picture} alt="" />
      </div>
      <h1>SAM ALTMAN</h1>
      <Link to="/profile">
      <button>View and edit profile</button>
      </Link>
      <div className="features">
        <div className="My-ads">
          <img src={my_ads_icon} alt="" />
          <p>My-ADS</p>
        </div>
        <div className="bussiness">
          <img src={bussines_icon} alt="" />
          <p>Buy Bussinees Package</p>
        </div>
        <div className="view-cart">
          <img src={cart_icon} alt="" />
          <p>View Cart</p>
        </div>
        <div className="billing">
          <img src={billing_icon} alt="" />
          <p>Bougth Packages & Billing</p>
        </div>
        <div className="elite">
          <img src={elite_icon} alt="" />
          <p>Become and Elite Buyer</p>
        </div>
        <div className="help">
          <img src={help_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="language">
          <img src={language_icon} alt="" />
          <p>Select language / भाषा चुने</p>
        </div>
        <div className="settings">
          <img src={settings_icon} alt="" />
          <p>Settings</p>
        </div>
        <div className="install-app">
          <img src={install_icon} alt="" />
          <p>Install OLX Lite app</p>
        </div>
        <div className="logout">
          <img src={logout_icon} alt="" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
