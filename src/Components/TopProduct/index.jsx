import React, { useEffect, useState } from "react";
import style from "../TopProduct/TopProduct.module.css";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Slice";
const URL = "http://localhost:3000/products";
const TopProduct = () => {
  const [Product, setProduct] = useState([]);
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

  const count = useSelector((state) => state.counter.value);
  console.log(count);
  const dispathc = useDispatch();
  return (
    <>
      <div className="container ">
        <div className={`${style.htag}`}>
          <h5>For You</h5>
          <h3>Top Featured Products</h3>
        </div>
        <div className={`${style.salam}`}>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 2,
                navigation: false,
              },
              768: {
                slidesPerView: 3,
                navigation: false,
              },
              992: {
                slidesPerView: 4,
                navigation: true,
              },
              1020: {
                slidesPerView: 5,
                navigation: true,
              },
            }}
            spaceBetween={10}
            modules={[Navigation, FreeMode, Autoplay]}
            className={style.mySwiper}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {Product.length &&
              Product.map(({ id, image, title, price, discount }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className={style.border}>
                      <div
                        className={`${style.topLine} d-flex justify-content-between p-3`}
                      >
                        <p className="p-2">{discount}%Off</p>
                        <CiHeart className={`${style.hearth}`} />
                      </div>
                      <div>
                        <img src={image} alt="Product" />
                      </div>
                      <div className={style.centerLine}>
                        <p>Available(in stock)</p>
                        <h4>{title}</h4>
                        <div className={style.h5}>
                          <h5>${price}</h5>
                          <h5>$15</h5>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between p-3  justify-content-center align-items-center ">
                        <div
                          className={`${style.btn} d-flex justify-content-center `}
                        >
                          <button onClick={() => dispathc(decrement())}>
                            -
                          </button>
                          <p>{count}</p>
                          <button onClick={() => dispathc(increment())}>
                            +
                          </button>
                        </div>
                        <div>
                          <IoCartOutline className={style.car} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TopProduct;
