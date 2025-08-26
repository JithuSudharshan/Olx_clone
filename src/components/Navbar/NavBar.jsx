import React from "react";
import "../Navbar/NavBar.css";
import logo from "../../assets/olx_logo.svg";
import search_icon_dark from "../../assets/search_icon_dark.svg";
import angle_icon from "../../assets/angle_icon.svg";
import search_icon_white from "../../assets/search_icon_white.svg";
import heart_icon from "../../assets/heart_icon.svg";
import comment_icon from "../../assets/comment_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import user_icon from "../../assets/user_icon.svg";
import sell_ring from "../../assets/sell_ring.png";
import plus_icon from "../../assets/plus_icon.svg"

const NavBar = ({}) => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="" />
      <div className="location">
        <img src={search_icon_dark} alt="" />
        <input type="text" placeholder="Ashok Vihar, Delhi" />
        <img src={angle_icon} alt="" />
      </div>
      <div className="search_item">
        <input type="text" placeholder="Find Cars, Mobile Phones and More... " />
        <div className="search-button">
          <img src={search_icon_white} alt="" />
        </div>
      </div>
      <div className="nav-right">
        <div className="language">
          <p>ENGLISH</p>
          <img src={angle_icon} alt="" />
        </div>
        <div className="utils">
          <img src={heart_icon} alt="" />
          <img src={comment_icon} alt="" />
          <img src={bell_icon} alt="" />
          <img src={user_icon} alt="" />
          <div className="sell-btn">
            <img src={sell_ring} alt="" />
            <div className="sell-inner">
              <img src={plus_icon} alt="" />
              <p>SELL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
