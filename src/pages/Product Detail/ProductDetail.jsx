import React, { useEffect, useState } from "react";
import "../Product Detail/ProductDetail.css";
import { useParams } from "react-router";
import toyotoImg from "../../assets/Images/Products_image/toyotaImg.jpeg";
import teslaImg from "../../assets/Images/Products_image/teslaImg.jpg";
import fordImg from "../../assets/Images/Products_image/fordImg.jpeg";
import bmwImg from "../../assets/Images/Products_image/bmwImg.jpg";
import iphoneImg from "../../assets/Images/Products_image/iphoneImg.jpeg";
import samsungImg from "../../assets/Images/Products_image/samsungImg.jpg";
import sonyImg from "../../assets/Images/Products_image/sonyImg.jpeg";
import mackbookImg from "../../assets/Images/Products_image/mackbookImg.jpeg";
import villaImg from "../../assets/Images/Products_image/villaImg.jpeg";
import downtownImg from "../../assets/Images/Products_image/downtownImg.jpeg";
import cottageImg from "../../assets/Images/Products_image/cottageImg.jpeg";
import beachpropImg from "../../assets/Images/Products_image/beachpropImg.jpg";
import porscheImg from "../../assets/Images/Products_image/porscheImg.jpeg";
import rangeroverImg from "../../assets/Images/Products_image/rangeroverImg.webp";
import mercedesImg from "../../assets/Images/Products_image/mercedesImg.jpg";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/NavBar";
import NavBand from "../../components/Navband/NavBand";
import user_grey from "../../assets/Images/Product_details/user _grey.png";
import loc_icon from "../../assets/Images/Product_details/placeholder.png";
import heart_icon from "../../assets/Images/Product_details/heart.png";
import share_icon from "../../assets/Images/Product_details/share.png";
import { useAuth } from "../../context/AuthProvider";
import Dropdown from "../../components/Nav-DropDown/Dropdown";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const { isClick_profile , setIsClick_profile } = useAuth();
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
  const allProducts = productsByCategory.flatMap((cat) =>
    cat.products.map((p) => ({ ...p, category: cat.category }))
  );

  // find product by id
  const item = allProducts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    setSelectedItem(item);
    console.log(selectedItem);
  }, [id]);

  const formatPrice = (price) => {
    return `₹ ${price.toLocaleString()}`;
  };

  if (selectedItem === null) {
    return <p>item loading.....</p>;
  }

  return (
    <div className="main-container">
      <NavBar />
      <div className="navband">
        <NavBand />
      </div>
      <div onClick={()=>setIsClick_profile(false)} className="product-details">
        <img src={heart_icon} alt="" />
        <img src={share_icon} alt="" />
        <div className="product-main">
          <div className="div-left">
            <img src={selectedItem.image} alt="" />
            <div className="img-small">
              <img src={selectedItem.image} alt="" />
              <img src={selectedItem.image} alt="" />
              <img src={selectedItem.image} alt="" />
            </div>
            <div className="description">
              <h3>Description</h3>
              <p>{selectedItem.description}</p>
            </div>
          </div>
          <div className="div-right">
            <div className="price-details">
              <h4>Price</h4>
              <p>{formatPrice(selectedItem.price)}</p>
            </div>
            <div className="seller-info">
              <h3>Seller Information</h3>
              <img src={user_grey} alt="" />
              <h2>Private Seller</h2>
              <p>Member Since 2022</p>
              <div className="loc">
                <img src={loc_icon} alt="" />
                <p>Punjab</p>
              </div>
            </div>
            <div className="buttons">
              <button>Call the seller</button>
              <button>Chat with Seller</button>
            </div>
            <div className="safety">
              Meet seller in a safe location. Inspect the item before you
              buy.Pay only after collecting the item.
            </div>
          </div>
        </div>
      </div>

      <div className="disclaimer">
        <p>
          Disclaimer: Please note that OLX serves as online marketplace and
          intermediary and merely providing the platform to the listers to list
          their businesses. The products listed on our platform are provided by
          third party i.e listers with the pricing marked at their discretion.
          We do not verify the authenticity or quality of these products, and we
          make no representations or warranties regarding their genuineness. By
          using our platform, you acknowledge that any purchase made is at your
          own risk, and we are not liable for any issues related to product
          authenticity, quality, or performance. We encourage users to exercise
          caution and discretion before making any payments to the listers{" "}
        </p>
      </div>
      <Footer />
      <div>{isClick_profile  && <Dropdown/>}</div>
    </div>
  );
};

export default ProductDetail;
