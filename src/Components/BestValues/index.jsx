import React, { useEffect, useState } from "react";
import style from "../BestValues/BestValues.module.css";
import axios from "axios";

const BestValue = () => {
  const URL = "http://localhost:3000/Offers/";
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className={style.header}>
          <h5>Offers</h5>
          <h2>Best Values</h2>
        </div>
        <div className={`${style.flex}`}>
          {product &&
            product.map(({ id, image, title, precent }) => {
              return (
                <div key={id} className={`${style.images}`}>
                  <img src={image} alt="" />
                  <div className={style.absalute}>
                    <h2>{title}</h2>
                    <p>{precent}</p>
                    <button>SHOP NOW</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default BestValue;
