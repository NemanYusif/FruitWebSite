import React from "react";
import style from "../SideBarCart/SideBarCart.module.css";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
const SideBarCart = () => {
  return (
    <>
      <div className="container d-flex d-block d-md-none mt-4 justify-content-center align-items-center ">
        <div className={`${style.links} col-8`}>
          <Link to="/">HOME</Link>
          <Link to="#">PRODUCT</Link>
          <Link to="#">STORES</Link>
          <Link to="#">CONTACT</Link>
        </div>
        <div className="col-4 d-flex justify-content-end ">
          <button className={style.card}>
            <IoCartOutline className={style.car} />
            <select className={style.select}>
              <option value="card">CART2</option>
            </select>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBarCart;
