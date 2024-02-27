import React from "react";
import Logo from "../../../public/HeaderLogo/Logo.png";
import style from "../Header/Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className={`${style.header} container`}>
        <img src={Logo} alt="Logo" />
        <div className={`${style.icon}`}>
          <CiLocationOn />
          <select className={`${style.selecttion}`}>
            <option value="Xacmaz">Xacmaz</option>
            <option value="Quba">Quba</option>
            <option value="Qusar">Qusar</option>
          </select>
        </div>
        <div className={`${style.right}`}>
          <div className={`${style.input}`}>
            <IoIosSearch className={`${style.icon2}`} />
            <input type="text" placeholder="Search for products..." />
          </div>
          <div className={`${style.connect}`}>
            <LuPhoneCall />
            <p>1800-000-000</p>
            <div className={`${style.firstLine}`}></div>
            <div className={`${style.icons}`}>
              <CiHeart className={`${style.hearth}`} />
              <div>
                <span className={`${style.number}`}>
                  <p>3</p>
                </span>
              </div>
            </div>
            <div className={`${style.firstLine}`}></div>
            <div>
              <FaRegUser />
            </div>
            <div className={`${style.select}`}>
              <select>
                <option value="Neman Yusif">Neman Yusif</option>
                <option value="Nizam Shikmatov">Nizam Abi</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
