import React, { useEffect, useState } from "react";
import "./MyAds.css";
import NavBar from "../../components/Navbar/NavBar";
import NavBand from "../../components/Navband/NavBand";
import Footer from "../../components/Footer/Footer";

const MyAds = () => {
  const [ads, setAds] = useState([]);

  useEffect(()=>{
    const data = fetch()
  },[ads])

  return (
    <div className="myads-page">
      <NavBar />
      <NavBand />
      <div className="ads-content">
        {ads.lenght === 0 ? (
          <div className="no-ads">
            <p>You haven't Post an add yet...!</p>
            <button>Start Selling</button>
          </div>
        ) : (
          <div className="ad-privew">
            <div className="ad-card">
              <img src="" alt="" />
              <h3>titile</h3>
              <p>category</p>
              <p>description</p>
              <p>price</p>

            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyAds;
