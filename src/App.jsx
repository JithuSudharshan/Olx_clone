import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";
import Login from "./components/Login/Login";
import Profile from "./pages/Profile/Profile";
import ProductDetail from "./pages/Product Detail/ProductDetail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/productdetails/:id" element={<ProductDetail/>} />
      </Routes>
    </div>
  );
};

export default App;
