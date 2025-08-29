import React, { useEffect, useState, useContext } from "react";
import "./MyAds.css";
import NavBar from "../../components/Navbar/NavBar";
import NavBand from "../../components/Navband/NavBand";
import Footer from "../../components/Footer/Footer";
import edit_icon from "../../assets/Images/ads/editing.png";
import delete_icon from "../../assets/Images/ads/bin.png";
import { db } from "../../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import AuthContext from "../../context/AuthContext";

const MyAds = () => {
  const [ads, setAds] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchAds = async () => {
      if (!user) return; 
      
      try {
        const adsRef = collection(db, "ads");
        const q = query(adsRef, where("userId", "==", user.uid)); 
        const querySnap = await getDocs(q);

        const adsData = querySnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAds(adsData);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, [user]);

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
            {ads.map((ad) => {
              return (
                <div key={ad.id} className="ad-card">
                  <img src={ad.images?.[0]} alt="" />
                  <h3>{`Titile : ${ad.title}`}</h3>
                  <p>{`Category : ${ad.category}`}</p>
                  <p>{`Description : ${ad.description}`}</p>
                  <p>{`Price : ${ad.price}`}</p>
                  <div className="features">
                    <img src={edit_icon} alt="" />
                    <img src={delete_icon} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyAds;
