import React from "react";

const Shimmer = () => {
  return (
    <div className="product-card shimmer-card">
      <div className="shimmer-image"></div>
      <div className="product-info">
        <div className="shimmer-line title"></div>
        <div className="shimmer-line desc"></div>
        <div className="shimmer-footer">
          <div className="shimmer-line price"></div>
          <div className="shimmer-line button"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
