import React, { useState } from "react";
import Logo from "../../../public/HeaderLogo/Logo.png";
import style from "../Header/Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SideBar from "../SideBar";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div className="container py-3">
        <div className="row align-items-center justify-content-between ">
          <div className="col-8 col-lg-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className={`${style.logo}`}>
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className={`${style.icon} d-none d-md-block`}>
                <CiLocationOn />
                <select className={`${style.selecttion}`}>
                  <option value="Xacmaz">Xacmaz</option>
                  <option value="Quba">Quba</option>
                  <option value="Qusar">Qusar</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-4 col-lg-9 ps-5 d-none d-md-block ">
            <div className="d-flex justify-content-end justify-content-lg-between align-items-center ">
              <div
                className={`${style.input} d-none d-lg-flex justify-content-center align-items-center `}
              >
                <IoIosSearch className={`${style.icon2}`} />
                <input type="text" placeholder="Search for products..." />
              </div>
              <div className={`${style.connect}`}>
                <div className="d-none d-lg-flex ">
                  <LuPhoneCall />
                  <p>1800-000-000</p>
                </div>
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

          {/* mobile bars */}
          <div
            className={`d-block d-md-none col-1 ${
              showMobileMenu ? "d-none" : "d-block"
            }`}
          >
            <FaBars onClick={() => setShowMobileMenu(!showMobileMenu)} />
          </div>
          <div>
            <SideBar
              setShowMobileMenu={setShowMobileMenu}
              showMobileMenu={showMobileMenu}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
