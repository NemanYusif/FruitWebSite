import React from "react";
import style from "../Banner/Banner.module.css";
const Banner = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className={style.banner}>
          <h2>Get $5 Cashback! Min Order of $50</h2>
          <h3>USE CODE : COMBOSUPERR2a</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
