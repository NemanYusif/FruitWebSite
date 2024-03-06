import React, { useEffect, useState } from "react";
import style from "../TopProduct/TopProduct.module.css";
import Pro1 from "/Products/Pro1.svg";
import Pro2 from "/Products/Pro2.svg";
import Pro3 from "/Products/Pro3.svg";
import Pro4 from "/Products/Pro4.svg";
import Pro5 from "/Products/Pro5.svg";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TopProduct = () => {
  const [Product, setProduct] = useState(0);

  const increment = () => {
    setProduct(Product + 1);
  };
  const decrement = () => {
    if (Product > 0) {
      setProduct(Product - 1);
    }
  };
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
            <SwiperSlide>
              <div className={style.border}>
                <div
                  className={`${style.topLine} d-flex justify-content-between p-3`}
                >
                  <p className="p-2">15%Off</p>
                  <CiHeart className={`${style.hearth}`} />
                </div>
                <div>
                  <img src={Pro1} alt="Product" />
                </div>
                <div className={style.centerLine}>
                  <p>Available(in stock)</p>
                  <h4>Fresh organic apricot</h4>
                  <div className={style.h5}>
                    <h5>$12</h5>
                    <h5>$15</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3  justify-content-center align-items-center ">
                  <div
                    className={`${style.btn} d-flex justify-content-center `}
                  >
                    <button onClick={decrement}>-</button>
                    <p>
                      <span>{Product}</span>
                    </p>
                    <button onClick={increment}>+</button>
                  </div>
                  <div>
                    <IoCartOutline className={style.car} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.border}>
                <div
                  className={`${style.topLine} d-flex justify-content-between p-3`}
                >
                  <p className="p-2">15%Off</p>
                  <CiHeart className={`${style.hearth}`} />
                </div>
                <div>
                  <img src={Pro1} alt="Product" />
                </div>
                <div className={style.centerLine}>
                  <p>Available(in stock)</p>
                  <h4>Fresh organic apricot</h4>
                  <div className={style.h5}>
                    <h5>$12</h5>
                    <h5>$15</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3  justify-content-center align-items-center ">
                  <div
                    className={`${style.btn} d-flex justify-content-center `}
                  >
                    <button onClick={decrement}>-</button>
                    <p>
                      <span>{Product}</span>
                    </p>
                    <button onClick={increment}>+</button>
                  </div>
                  <div>
                    <IoCartOutline className={style.car} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.border}>
                <div
                  className={`${style.topLine} d-flex justify-content-between p-3`}
                >
                  <p className="p-2">15%Off</p>
                  <CiHeart className={`${style.hearth}`} />
                </div>
                <div>
                  <img src={Pro2} alt="Product" />
                </div>
                <div className={style.centerLine}>
                  <p>Available(in stock)</p>
                  <h4>Cucumber</h4>
                  <div className={style.h5}>
                    <h5>$12</h5>
                    <h5>$15</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3  justify-content-center align-items-center ">
                  <div
                    className={`${style.btn} d-flex justify-content-center `}
                  >
                    <button onClick={decrement}>-</button>
                    <p>
                      <span>{Product}</span>
                    </p>
                    <button onClick={increment}>+</button>
                  </div>
                  <div>
                    <IoCartOutline className={style.car} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.border}>
                <div
                  className={`${style.topLine} d-flex justify-content-between p-3`}
                >
                  <p className="p-2">15%Off</p>
                  <CiHeart className={`${style.hearth}`} />
                </div>
                <div>
                  <img src={Pro3} alt="Product" />
                </div>
                <div className={style.centerLine}>
                  <p>Available(in stock)</p>
                  <h4>Hazelnuts filbert nut</h4>
                  <div className={style.h5}>
                    <h5>$12</h5>
                    <h5>$15</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3  justify-content-center align-items-center ">
                  <div
                    className={`${style.btn} d-flex justify-content-center `}
                  >
                    <button onClick={decrement}>-</button>
                    <p>
                      <span>0</span>
                    </p>
                    <button>+</button>
                  </div>
                  <div>
                    <IoCartOutline className={style.car} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.border}>
                <div
                  className={`${style.topLine} d-flex justify-content-between p-3`}
                >
                  <p className="p-2">15%Off</p>
                  <CiHeart className={`${style.hearth}`} />
                </div>
                <div>
                  <img src={Pro4} alt="Product" />
                </div>
                <div className={style.centerLine}>
                  <p>Available(in stock)</p>
                  <h4>Raw broccoli</h4>
                  <div className={style.h5}>
                    <h5>$12</h5>
                    <h5>$15</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3  justify-content-center align-items-center ">
                  <div
                    className={`${style.btn} d-flex justify-content-center `}
                  >
                    <button onClick={decrement}>-</button>
                    <p>
                      <span>0</span>
                    </p>
                    <button>+</button>
                  </div>
                  <div>
                    <IoCartOutline className={style.car} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.border}>
                <div
                  className={`${style.topLine} d-flex justify-content-between p-3`}
                >
                  <p className="p-2">15%Off</p>
                  <CiHeart className={`${style.hearth}`} />
                </div>
                <div>
                  <img src={Pro5} alt="Product" />
                </div>
                <div className={style.centerLine}>
                  <p>Available(in stock)</p>
                  <h4>Organic quince</h4>
                  <div className={style.h5}>
                    <h5>$12</h5>
                    <h5>$15</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-3  justify-content-center align-items-center ">
                  <div
                    className={`${style.btn} d-flex justify-content-center `}
                  >
                    <button onClick={decrement}>-</button>
                    <p>
                      <span>0</span>
                    </p>
                    <button>+</button>
                  </div>
                  <div>
                    <IoCartOutline className={style.car} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TopProduct;
