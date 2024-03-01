import React from "react";
import { IoIosSearch } from "react-icons/io";
import style from "../SideBar/SideBar.module.css";
import Logo from "../../../public/HeaderLogo/Logo.png";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className={`${style.searchBar}`}>
      <div className="d-flex w-100 justify-content-between align-items-center px-2">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className=" d-block d-md-none">
          <IoClose className={`${style.icon}`} />
        </div>
      </div>
      <div
        className={`${style.input} d-flex  d-md-none justify-content-center align-items-center mt-3 `}
      >
        <IoIosSearch className={`${style.icon2}`} />
        <input type="text" placeholder="Search for products..." />
      </div>
    </div>
  );
};

export default SideBar;
