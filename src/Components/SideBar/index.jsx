import React from "react";
import { IoIosSearch } from "react-icons/io";
import style from "../SideBar/SideBar.module.css";
import Logo from "../../../public/HeaderLogo/Logo.png";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Footer from "../Footer";

const SideBar = () => {
  return (
    <div className="container">
      <div className={`${style.searchBar}`}>
        <div className="d-flex w-100 justify-content-between align-items-center px-2">
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className=" d-flex d-md-none align-content-center ">
            <div className={`${style.icons}`}>
              <CiHeart className={`${style.hearth}`} />
              <div>
                <span className={`${style.number}`}>
                  <p>3</p>
                </span>
              </div>
            </div>
            <IoClose onClick={<Footer />} className={`${style.icon}`} />
          </div>
        </div>
        <div
          className={`${style.input} d-flex  d-md-none justify-content-center align-items-center mt-3 `}
        >
          <IoIosSearch className={`${style.icon2}`} />
          <input type="text" placeholder="Search for products..." />
        </div>
        <div
          className={`${style.locationIcon} d-flex justify-content-center align-items-center mt-2 px-5`}
        >
          <CiLocationOn />
          <select className={`${style.selecttion} px-2  py-1`}>
            <option value="Xacmaz">Xacmaz</option>
            <option value="Quba">Quba</option>
            <option value="Qusar">Qusar</option>
          </select>
        </div>
        <div className="d-flex justify-content-between align-items-center px-5">
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
  );
};

export default SideBar;
