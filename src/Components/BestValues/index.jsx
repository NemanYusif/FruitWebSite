import React from "react";
import style from "../BestValues/BestValues.module.css";

const BestValue = () => {
  return (
    <>
      <div className="container">
        <div className={style.header}>
          <h5>Offers</h5>
          <h2>Best Values</h2>
        </div>
        <div className={`${style.images} d-flex w-100`}>
          <img src="/Offers/Offers1.svg" alt="" />
        </div>
      </div>
    </>
  );
};
export default BestValue;
