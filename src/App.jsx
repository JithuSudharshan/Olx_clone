import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";
import Login from "./components/Login/Login";
import Profile from "./pages/Profile/Profile";
import ProductDetail from "./pages/Product Detail/ProductDetail";
import MyAds from "./pages/My Ads/MyAds";
import Sell from "./pages/Sell/Sell";
import EditAd from "./pages/Edit_Ad/EditAd";
import ProtectedRoute from "./components/Protected_routes/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/myAds" element={<MyAds />} />
        <Route
          path="/sell"
          element={
            <ProtectedRoute>
              <Sell />
            </ProtectedRoute>
          }
        />
        <Route path="/edit/:id" element={<EditAd />} />
      </Routes>
    </div>
  );
};

export default App;
