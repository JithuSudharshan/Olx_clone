import { useEffect, useState } from "react";
import "../Cards/Cards.css";
import { Link } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Shimmer from "../Shimmer-UI/Shimmer";

function Cards() {
  // Product data grouped by category
  const [productsByCategory, setProductsBycategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const adsRef = collection(db, "ads");
        const querySnap = await getDocs(adsRef);

        const adsData = querySnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Group ads by category
        const grouped = adsData.reduce((acc, ad) => {
          const { category } = ad;
          if (!acc[category]) {
            acc[category] = { category, products: [] };
          }
          acc[category].products.push(ad);
          return acc;
        }, {});

        // Convert object to array
        setProductsBycategory(Object.values(grouped));
      } catch (error) {
        console.error("Error fetching ads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  // Convert price to INR format
  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="cards-container">
      <div className="categories-wrapper">
        {loading ? (
          // Show shimmer placeholders while fetching
          <div className="products-grid">
            {Array(6)
              .fill("")
              .map((_, idx) => (
                <Shimmer key={idx} />
              ))}
          </div>
        ) : (
          productsByCategory.map((categoryGroup) => (
            <div key={categoryGroup.category} className="category-block">
              <h2 className="category-title">{categoryGroup.category}</h2>
              <div className="products-grid">
                {categoryGroup.products.map((product) => (
                  <div key={product.id} className="product-card">
                    <img
                      src={product.images?.[0]}
                      alt={product.title}
                      className="product-image"
                    />
                    <div className="product-info">
                      <h3 className="product-name">{product.title}</h3>
                      <p className="product-description">
                        {product.description}
                      </p>
                      <div className="product-footer">
                        <span className="product-price">
                          {formatPrice(product.price)}
                        </span>
                        <Link to={`/productdetails/${product.id}`}>
                          <button className="details-button">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cards;
