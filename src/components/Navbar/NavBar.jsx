import React, { useState } from "react";
import "../Navbar/NavBar.css";
import logo from "../../assets/Images/Card_image/olx_logo.svg";
import search_icon_dark from "../../assets/Images/Card_image/search_icon_dark.svg";
import angle_icon from "../../assets/Images/Card_image/angle_icon.svg";
import search_icon_white from "../../assets/Images/Card_image/search_icon_white.svg";
import heart_icon from "../../assets/Images/Card_image/heart_icon.svg";
import comment_icon from "../../assets/Images/Card_image/comment_icon.svg";
import bell_icon from "../../assets/Images/Card_image/bell_icon.svg";
import user_icon from "../../assets/Images/Card_image/user_icon.svg";
import sell_ring from "../../assets/Images/Card_image/sell_ring.png";
import plus_icon from "../../assets/Images/Card_image/plus_icon.svg";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router";

const NavBar = () => {
  //from useContext
  const { user, setIsClick_profile, setIsClickLogin } = useAuth();
  const navigate = useNavigate()

  const open_feautures_Modal = () => {
    setIsClick_profile((prvs) => (prvs = !prvs));
  };
  const open_login_modal = () => {
    setIsClickLogin(true)
  };
  const handleSellBtn = ()=>{
    if(user){
      navigate("/sell")
    }else{
      setIsClickLogin(true);
    }
  }

  return (
    <div className="nav-bar">
      <img onClick={()=>navigate("/")} src={logo} alt="" />
      <div className="location">
        <img src={search_icon_dark} alt="" />
        <input type="text" placeholder="Ashok Vihar, Delhi" />
        <img src={angle_icon} alt="" />
      </div>
      <div className="search_item">
        <input
          type="text"
          placeholder="Find Cars, Mobile Phones and More... "
        />
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
          {user ? (
            <img onClick={open_feautures_Modal} src={user_icon} alt="" />
          ) : (
            <p onClick={open_login_modal} className="login">
              Login
            </p>
          )}

          <div onClick={handleSellBtn} className="sell-btn">
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
