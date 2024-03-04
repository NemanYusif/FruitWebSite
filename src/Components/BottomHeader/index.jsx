import React from "react";
import { FaBars } from "react-icons/fa6";
import style from "../BottomHeader/BottomHeader.module.css";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const BottomHeader = () => {
  return (
    <>
      <div className={style.border}></div>
      <div className="container">
        <div className={`${style.all} d-none d-md-flex `}>
          <div className={`${style.bar} col-3 `}>
            <FaBars className={style.icon} />
            <h5>Select Categories</h5>
          </div>
          <div className={`${style.links} col-4`}>
            <Link to="/">HOME</Link>
            <Link to="#">PRODUCT</Link>
            <Link to="#">STORES</Link>
            <Link to="#">CONTACT</Link>
          </div>

          <div className="col-5 d-flex justify-content-end">
            <button className={style.card}>
              <IoCartOutline className={style.car} />
              <select className={style.select}>
                <option value="card">CART2</option>
              </select>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomHeader;
