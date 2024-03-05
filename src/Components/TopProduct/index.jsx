import React from "react";
import style from "../TopProduct/TopProduct.module.css";
const TopProduct = () => {
  return (
    <>
      <div className="container">
        <div className={`${style.htag}`}>
          <h5>For You</h5>
          <h3>Top Featured Products</h3>
        </div>
      </div>
    </>
  );
};

export default TopProduct;
