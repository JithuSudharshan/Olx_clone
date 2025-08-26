import { useState } from "react";
import "../Cards/Cards.css";
import toyotoImg from "../../assets/Products_image/toyotaImg.jpeg";
import teslaImg from "../../assets/Products_image/teslaImg.jpg";
import fordImg from "../../assets/Products_image/fordImg.jpeg";
import bmwImg from "../../assets/Products_image/bmwImg.jpg";
import iphoneImg from "../../assets/Products_image/iphoneImg.jpeg";
import samsungImg from "../../assets/Products_image/samsungImg.jpg";
import sonyImg from "../../assets/Products_image/sonyImg.jpeg";
import mackbookImg from "../../assets/Products_image/mackbookImg.jpeg";
import villaImg from "../../assets/Products_image/villaImg.jpeg";
import downtownImg from "../../assets/Products_image/downtownImg.jpeg";
import cottageImg from "../../assets/Products_image/cottageImg.jpeg";
import beachpropImg from "../../assets/Products_image/beachpropImg.jpg";
import porscheImg from "../../assets/Products_image/porscheImg.jpeg";
import rangeroverImg from "../../assets/Products_image/rangeroverImg.webp";
import mercedesImg from "../../assets/Products_image/mercedesImg.jpg";
// import ProductDetails from '../ProductDetails/ProductDetails';


function Cards() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Product data grouped by category
  const productsByCategory = [
    {
      category: "Cars",
      products: [
        {
          id: 1,
          name: "Toyota Camry 2023",
          price: 2073417,
          image: toyotoImg,
          description: "Reliable midsize sedan with great fuel economy...",
        },
        {
          id: 2,
          name: "Tesla Model 3",
          price: 3568997,
          image: teslaImg,
          description: "Electric vehicle with autopilot features...",
        },
        {
          id: 3,
          name: "Ford F-150",
          price: 3238617,
          image: fordImg,
          description: "Best-selling pickup truck in America...",
        },
        {
          id: 4,
          name: "BMW X5",
          price: 5145997,
          image: bmwImg,
          description: "Luxury SUV with premium features...",
        },
      ],
    },
    {
      category: "Electronics",
      products: [
        {
          id: 5,
          name: "iPhone 15 Pro",
          price: 82917,
          image: iphoneImg,
          description: "Latest Apple smartphone with A17 Pro chip...",
        },
        {
          id: 6,
          name: "Samsung QLED TV",
          price: 124417,
          image: samsungImg,
          description: "65-inch 4K Smart TV with Quantum Dot technology...",
        },
        {
          id: 7,
          name: "Sony WH-1000XM5",
          price: 33117,
          image: sonyImg,
          description: "Industry-leading noise-cancelling headphones...",
        },
        {
          id: 8,
          name: "MacBook Pro 14",
          price: 165917,
          image: mackbookImg,
          description: "Powerful laptop with M2 Pro chip...",
        },
      ],
    },
    {
      category: "Homes",
      products: [
        {
          id: 9,
          name: "Modern Villa",
          price: 62250000,
          image: villaImg,
          description: "4-bedroom villa with pool and ocean view...",
        },
        {
          id: 10,
          name: "Downtown Condo",
          price: 37350000,
          image: downtownImg,
          description: "2-bedroom luxury condo in city center...",
        },
        {
          id: 11,
          name: "Countryside Cottage",
          price: 26560000,
          image: cottageImg,
          description: "Charming 3-bedroom cottage with garden...",
        },
        {
          id: 12,
          name: "Beachfront Property",
          price: 99600000,
          image: beachpropImg,
          description: "Luxury beach house with private access...",
        },
      ],
    },
    {
      category: "Luxury Vehicles",
      products: [
        {
          id: 13,
          name: "Porsche 911",
          price: 9545000,
          image: porscheImg,
          description: "Iconic sports car with 379 horsepower...",
        },
        {
          id: 14,
          name: "Range Rover Autobiography",
          price: 12035000,
          image: rangeroverImg,
          description: "Ultra-luxury SUV with premium finishes...",
        },
        {
          id: 15,
          name: "Mercedes S-Class",
          price: 9794000,
          image: mercedesImg,
          description: "Flagship luxury sedan with cutting-edge tech...",
        },
      ],
    },
  ];

  // Convert price to INR format
  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  // Handle showing product details
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  // Handle closing product details
  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="cards-container">
      {/* Loop through product categories and display each */}
      <div className="categories-wrapper">
        {productsByCategory.map((categoryGroup) => (
          <div key={categoryGroup.category} className="category-block">
            <h2 className="category-title">{categoryGroup.category}</h2>

            <div className="products-grid">
              {categoryGroup.products.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleViewDetails(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <span className="product-price">
                        {formatPrice(product.price)}
                      </span>
                      <button className="details-button">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Render product details modal if a product is selected */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
}

export default Cards;
