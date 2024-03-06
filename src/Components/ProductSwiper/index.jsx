import React from "react";
import style from "../ProductSwiper/ProductSwiper.module.css";
import Img1 from "/SwiperImages/SwiperImg1.svg";
import Img2 from "/SwiperImages/SwiperImg2.svg";
import Img3 from "/SwiperImages/SwiperImg3.svg";
import Img4 from "/SwiperImages/SwiperImg4.svg";
import Img5 from "/SwiperImages/SwiperImg5.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/bundle";
const ProductSwiper = () => {
  return (
    <>
      <div className={`${style.border} d-none d-md-block `}></div>
      <div className=" ">
        <div className={`${style.gap} mt-3 `}>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            spaceBetween={10}
            freeMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={`${style.Img} `}>
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
            </SwiperSlide>
            <SwiperSlide sx={{ height: "0px" }}>
              <div className={`${style.Img}`}>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.Img}`}>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.Img}`}>
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
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${style.Img}`}>
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductSwiper;
