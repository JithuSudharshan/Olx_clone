import React from "react";
import "./Profile.css";
import Navbar from "../../components/Navbar/NavBar";
import NavBand from "../../components/Navband/NavBand";
import profile_pic from "../../assets/Images/Nav-feauture icons/profilePicture.jpeg";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
  return (
    <div className="edit-page">
      <Navbar />
      <NavBand />
      <div className="profile-card">
        <img src={profile_pic} alt="" />
        <p>Sam Altman</p>
        <div className="join-date">
          <p>Member since Dec 2024</p>
        </div>
        <div className="followers">
          <p>0 Followers | 0 Following</p>
        </div>
        <p>User verified with </p>
        <button>Edit Profile</button>
        <p>Share Profile</p>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
