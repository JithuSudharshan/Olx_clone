import React, { useEffect, useState } from "react";
import "../Product Detail/ProductDetail.css";
import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/NavBar";
import NavBand from "../../components/Navband/NavBand";
import user_grey from "../../assets/Images/Product_details/user _grey.png";
import loc_icon from "../../assets/Images/Product_details/placeholder.png";
import heart_icon from "../../assets/Images/Product_details/heart.png";
import share_icon from "../../assets/Images/Product_details/share.png";
import { useAuth } from "../../context/AuthProvider";
import Dropdown from "../../components/Nav-DropDown/Dropdown";
import { doc,getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isClick_profile, setIsClick_profile } = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "ads", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setSelectedItem({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.error("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const formatPrice = (price) => `₹ ${price.toLocaleString()}`;

  if (loading) return <p>Loading product...</p>;
  if (!selectedItem) return <p>Product not found</p>;

  return (
    <div className="main-container">
      <NavBar />
      <div className="navband">
        <NavBand />
      </div>

      <div
        onClick={() => setIsClick_profile(false)}
        className="product-details"
      >
        <img src={heart_icon} alt="favorite" />
        <img src={share_icon} alt="share" />

        <div className="product-main">
          {/* Left Section */}
          <div className="div-left">
            <img src={selectedItem.images?.[0]} alt={selectedItem.title} />
            <div className="img-small">
              {selectedItem.images?.map((img, idx) => (
                <img key={idx} src={img} alt={`preview-${idx}`} />
              ))}
            </div>
            <div className="description">
              <h3>Description</h3>
              <p>{selectedItem.description}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="div-right">
            <div className="price-details">
              <h4>Price</h4>
              <p>{formatPrice(selectedItem.price)}</p>
            </div>

            <div className="seller-info">
              <h3>Seller Information</h3>
              <img src={user_grey} alt="seller" />
              <h2>{selectedItem.sellerName || "Private Seller"}</h2>
              <p>Member Since 2022</p>
              <div className="loc">
                <img src={loc_icon} alt="location" />
                <p>{selectedItem.location || "Unknown"}</p>
              </div>
            </div>

            <div className="buttons">
              <button>Call the seller</button>
              <button>Chat with Seller</button>
            </div>

            <div className="safety">
              Meet seller in a safe location. Inspect the item before you buy.
              Pay only after collecting the item.
            </div>
          </div>
        </div>
      </div>

      <div className="disclaimer">
        <p>
          Disclaimer: Please note that OLX serves as an online marketplace and
          intermediary, merely providing a platform for listers to list their
          businesses. The products listed here are provided by third parties
          with pricing at their discretion. We do not verify authenticity or
          quality. Please exercise caution before making any payments.
        </p>
      </div>

      <Footer />
      <div>{isClick_profile && <Dropdown />}</div>
    </div>
  );
};

export default ProductDetail;
