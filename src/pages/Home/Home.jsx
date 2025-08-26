import React from "react";
import "../Home/Home.css";
import NavBar from "../../components/Navbar/NavBar";
import NavBand from "../../components/Navband/NavBand";
import Footer from "../../components/Footer/Footer";
import banner_img from "../../assets/banner.jpg";
import Cards from "../../components/Cards/Cards";


const Home = () => {
  return (
    <div className="home">
      <div className="nav-bar">
        <NavBar />
      </div>
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
    </div>
  );
};

export default Home;
