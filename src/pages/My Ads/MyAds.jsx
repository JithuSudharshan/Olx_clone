import React, { useEffect, useState, useContext } from "react";
import "./MyAds.css";
import NavBar from "../../components/Navbar/NavBar";
import NavBand from "../../components/Navband/NavBand";
import Footer from "../../components/Footer/Footer";
import edit_icon from "../../assets/Images/ads/editing.png";
import delete_icon from "../../assets/Images/ads/bin.png";
import { db } from "../../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router";
import Dropdown from "../../components/Nav-DropDown/Dropdown";

const MyAds = () => {
  const [ads, setAds] = useState([]);
  const { user, isClick_profile } = useAuth();

  const navigate = useNavigate();

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

  const handleDlt = async (adId) => {
    try {
      await deleteDoc(doc(db, "ads", adId));
      alert("Ad deleted successfully!");

      setAds((prevAds) => prevAds.filter((ad) => ad.id !== adId));
    } catch (error) {}
  };

  const handleEdit = (adId)=>{
    navigate(`/edit/${adId}`)
  }

  if (ads.length === 0)
    return (
      <div className="no-ads">
        <NavBar />
        <NavBand />
        <div className="shimmer">
          <h1>You haven't posted any ads yet...!</h1>
          <button onClick={() => navigate("/sell")}>Start selling...</button>
        </div>
        <Footer />
      </div>
    );

  return (
    <div className="myads-page">
      <NavBar />
      <NavBand />
      <div className="ads-content">
        <div className="ad-privew">
          {ads.map((ad) => {
            return (
              <div key={ad.id} className="ad-card">
                <img src={ad.images?.[0]} alt="" />
                <h2>{`Titile : ${ad.title}`}</h2>
                <p>{`Category : ${ad.category}`}</p>
                <p>{`Description : ${ad.description}`}</p>
                <p>{`Price : ${ad.price}`}</p>
                <div className="features">
                  <img onClick={()=>handleEdit(ad.id)} src={edit_icon} alt="" />
                  <img
                    onClick={() => handleDlt(ad.id)}
                    src={delete_icon}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <div>{isClick_profile && <Dropdown />}</div>
    </div>
  );
};

export default MyAds;
