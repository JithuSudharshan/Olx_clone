import React, { useEffect, useState } from "react";
import "./EditAd.css";
import NavBar from "../../components/Navbar/NavBar";
import NavBand from "../../components/Navband/NavBand";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../context/AuthProvider";
import Dropdown from "../../components/Nav-DropDown/Dropdown";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const EditAd = () => {
  const { isClick_profile } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const adRef = doc(db, "ads", id);
        const adSnap = await getDoc(adRef);
        if (adSnap.exists()) {
          setFormData(adSnap.data());
        }
      } catch (err) {
        console.error("Error fetching ad:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAd();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [saving, setSaving] = useState(false);

  const handleUpdate = async () => {
    setSaving(true);
    try {
      const adRef = doc(db, "ads", id);
      await updateDoc(adRef, {
        ...formData,
        updatedAt: new Date(),
      });
      alert("Ad updated successfully!");
      navigate("/myads");
    } catch (err) {
      console.error("Error updating ad:", err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="edi-page">
      <NavBar />
      <NavBand />
      <div className="edit-form">
        <div className="edit-page">
          <h1>Edit Your Ad</h1>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />

          <div className="edit-buttons">
            <button onClick={handleUpdate} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </button>
            <button
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to discard changes?")
                ) {
                  navigate("/myads");
                }
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <div>{isClick_profile && <Dropdown />}</div>
    </div>
  );
};

export default EditAd;
