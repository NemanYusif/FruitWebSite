import React from "react";
import style from "../Categories/Categories.module.css";
import { Link } from "react-router-dom";
import cat1 from "/Categories/cat1.svg";
import cat2 from "/Categories/cat2.svg";
import cat3 from "/Categories/cat3.svg";
import cat4 from "/Categories/cat4.svg";
import cat5 from "/Categories/cat5.svg";
import cat6 from "/Categories/cat6.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Categories = () => {
  return (
    <>
      <div className="container">
        <div className={`${style.shop}`}>
          <h5>Shop By</h5>
          <h2>Categories</h2>
        </div>
        <div className="d-flex gap-3">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              368: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1020: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className={style.mySwiper}
          >
            <SwiperSlide>
              <Link to="#">
                <div className="d-flex gap-3 ">
                  <img src={cat1} alt="" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <div className="d-flex gap-3 ">
                  <img src={cat2} alt="" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <div className="d-flex gap-3 ">
                  <img src={cat3} alt="" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <div className="d-flex gap-3 ">
                  <img src={cat4} alt="" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <div className="d-flex gap-3 ">
                  <img src={cat5} alt="" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <div className="d-flex gap-3 ">
                  <img src={cat6} alt="" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <div className="d-flex gap-3 ">
                  <img src={cat2} alt="" />
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <div className="d-flex gap-3 ">
                  <img src={cat4} alt="" />
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Categories;
