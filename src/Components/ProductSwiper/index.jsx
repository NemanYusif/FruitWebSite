import React, { useEffect, useState } from "react";
import style from "../ProductSwiper/ProductSwiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/bundle";
import axios from "axios";

const ProductSwiper = () => {
  const [mainCat, setMainCat] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/mainCategories")
      .then(({ data }) => {
        setMainCat(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            {mainCat.length &&
              mainCat.map(({ id, image, title, percent }) => (
                <SwiperSlide key={id}>
                  <div className={`${style.Img} `}>
                    <img src={image} alt={title} />
                    <div className={style.backg}>
                      <h6>{percent}% OFF</h6>
                      <h5>Buy More & Save More</h5>
                      <p>{title}</p>
                    </div>
                    <div className={style.btn}>
                      <button className={style.btnBack}>SHOP NOW</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductSwiper;
