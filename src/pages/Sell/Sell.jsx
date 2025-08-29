import React, { useState } from "react";
import "./Sell.css";
import { db } from "../../firebase/firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import Navbar from "../../components/Navbar/NavBar.jsx";
import NavBand from "../../components/Navband/NavBand.jsx";
import BrandFooter from "../../components/Footer/BrandFooter.jsx";
import { uploadManyToCloudinary } from "../../Cloudinary/cloudinary.js";
import cross_icon from "../../assets/Images/profile page-icons/x-button.png";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthProvider.jsx";

const PostAd = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {user}= useAuth();

  const storage = getStorage();

  const handleRemove = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageChange = (e) => {
    setImages((prev) => [...prev, ...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const upload = await uploadManyToCloudinary(images);
      const imageUrls = upload.map((u) => u.url);

      await addDoc(collection(db, "ads"), {
        userId: user.uid,
        title,
        category,
        description,
        price: Number(price),
        images: imageUrls,
        createdAt: serverTimestamp(),
      });

      alert("Ad posted successfully!");
      setTitle("");
      setCategory("");
      setDescription("");
      setPrice("");
      setImages([]);
    } catch (error) {
      console.error(error);
      alert("Error posting ad: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <NavBand />
      <div className="post-ad">
        <button onClick={()=>navigate(-1)} className="back-btn">{`<= Back`}</button>
        <h2>Post Your Ad</h2>
        <form onSubmit={handleSubmit} className="post-ad-form">
          <input
            type="text"
            placeholder="Product Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {images.length > 0 && (
            <div className="uploaded-images">
              {images.map((img, idx) => (
                <div key={idx} className="preview-img">
                  <img
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    style={{ width: "100px", margin: "5px" }}
                  />
                  <img
                    onClick={() => handleRemove(idx)}
                    className="x"
                    src={cross_icon}
                    alt=""
                  />
                </div>
              ))}
            </div>
          )}
          <button className="upload-btn" type="submit" disabled={loading}>
            {loading ? "Posting..." : "Post Ad"}
          </button>
        </form>
      </div>
      <div className="Brand-footer">
        <BrandFooter />
      </div>
    </div>
  );
};

export default PostAd;
