import React from "react";
import { IoIosSearch } from "react-icons/io";
import style from "../SideBar/SideBar.module.css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Footer from "../Footer";
import SideBarCart from "../SideBarCart";
import Logo from "/HeaderLogo/Logo.png";

const SideBar = ({ setShowMobileMenu, showMobileMenu }) => {
  return (
    <div className={style.sideBar}>
      <div className="container">
        <div
          className={`${
            showMobileMenu
              ? `${style.searchBar}`
              : `${style.searchBar} ${style.hideSearchBar}`
          }`}
        >
          <div className="d-flex w-100 d-md-none justify-content-end align-items-center px-2 pt-3">
            <div className={`${style.logo}`}>
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className={`${style.icons} d-flex`}>
              <CiHeart className={`${style.hearth}`} />
              <div>
                <span className={`${style.number}`}>
                  <p className="position-relative">3</p>
                </span>
              </div>
              <IoClose
                onClick={() => {
                  setShowMobileMenu((pre) => !pre);
                }}
                className={`${style.icon}`}
              />
            </div>
          </div>
          <SideBarCart />
          <div
            className={`${style.input} d-flex  d-md-none justify-content-center align-items-center mt-3 `}
          >
            <IoIosSearch className={`${style.icon2}`} />
            <input type="text" placeholder="Search for products..." />
          </div>
          <div
            className={`${style.locationIcon} d-flex d-md-none  justify-content-center align-items-center mt-2 px-5`}
          >
            <CiLocationOn />
            <select className={`${style.selecttion} px-2  py-1`}>
              <option value="Xacmaz">Xacmaz</option>
              <option value="Quba">Quba</option>
              <option value="Qusar">Qusar</option>
            </select>
          </div>
          <div className="d-flex d-md-none justify-content-between align-items-center px-5">
            <div className={style.userIcon}>
              <FaRegUser />
            </div>
            <div className={style.selectBox}>
              <select className={`${style.select} py-1 my-3 px-2`}>
                <option value="Neman Yusif">Neman Yusif</option>
                <option value="Nizam Shikmatov">Nizam Abi</option>
              </select>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
