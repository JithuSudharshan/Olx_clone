import React from "react";
import "../Home/Home.css";
import NavBar from "../../components/Navbar/NavBar";
import NavBand from "../../components/Navband/NavBand";
import Footer from "../../components/Footer/Footer";
import banner_img from "../../assets/Images/Card_image/banner.jpg";
import Cards from "../../components/Cards/Cards";
import { useAuth } from "../../context/AuthProvider";
import Dropdown from "../../components/Nav-DropDown/Dropdown";
import Login from "../../components/Login/Login";
import { login } from "../../firebase/firebase";


const Home = () => {
  const {isClick_profile , isclickLogin  } = useAuth();
  return (
    <div className="home">
      <div className="nav-bar">
        <NavBar
        
        />
      </div>

      {isClick_profile?<Dropdown/>:<></>}
      
      <div className="home-content">
        <NavBand />
        <div className="banner-img">
          <div>
            <img src={banner_img} alt="" />
          </div>
        </div>
        <div className="product-cards">
          <Cards/>
        </div>
        <Footer />
      </div>
      <div>
        {isclickLogin?<Login/>:<></>}
      </div>
    </div>
  );
};

export default Home;
