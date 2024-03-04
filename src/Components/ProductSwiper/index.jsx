import React from "react";
import style from "../ProductSwiper/ProductSwiper.module.css";
import Img1 from "/SwiperImages/SwiperImg1.svg";
import Img2 from "/SwiperImages/SwiperImg2.svg";
import Img3 from "/SwiperImages/SwiperImg3.svg";
import Img4 from "/SwiperImages/SwiperImg4.svg";
import Img5 from "/SwiperImages/SwiperImg5.svg";
const ProductSwiper = () => {
  return (
    <>
      <div className={style.border}></div>
      <div className={`${style.gap} mt-3`}>
        <div className={`${style.Img} shadow mb-5 bg-body rounded`}>
          <img src={Img1} alt="" />
          <div className={style.backg}>
            <h6>6% OFF</h6>
            <h5>Buy More & Save More</h5>
            <p>Beverage</p>
          </div>
          <div className={style.btn}>
            <button className={style.btnBack}>SHOP NOW</button>
          </div>
        </div>
        <div className={`${style.Img} shadow mb-5 bg-body rounded`}>
          <img src={Img2} alt="" />
          <div className={style.backg}>
            <h6>10% OFF</h6>
            <h5>Buy More & Save More</h5>
            <p>Nuts & Snacks</p>
          </div>
          <div className={style.btn}>
            <button className={style.btnBack}>SHOP NOW</button>
          </div>
        </div>
        <div className={`${style.Img} shadow mb-5 bg-body rounded`}>
          <img src={Img3} alt="" />
          <div className={style.backg}>
            <h6>6% OFF</h6>
            <h5>Buy More & Save More</h5>
            <p>Fresh Vegetables</p>
          </div>
          <div className={style.btn}>
            <button className={style.btnBack}>SHOP NOW</button>
          </div>
        </div>
        <div className={`${style.Img} shadow mb-5 bg-body rounded`}>
          <img src={Img4} alt="" />
          <div className={style.backg}>
            <h6>25% OFF</h6>
            <h5>Buy More & Save More</h5>
            <p>Fresh Fruits</p>
          </div>
          <div className={style.btn}>
            <button className={style.btnBack}>SHOP NOW</button>
          </div>
        </div>
        <div className={`${style.Img} shadow mb-5 bg-body rounded`}>
          <img src={Img5} alt="" />
          <div className={style.backg}>
            <h6>15% OFF</h6>
            <h5>Buy More & Save More</h5>
            <p>Eggs & Dairy</p>
          </div>
          <div className={style.btn}>
            <button className={style.btnBack}>SHOP NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSwiper;
