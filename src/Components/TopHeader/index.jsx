import React from "react";
import style from "../TopHeader/TopHeader.module.css";
import { CiMail } from "react-icons/ci";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const TopHeader = () => {
  return (
    <>
      <div>
        <div className={`${style.header}`}>
          <div className={`${style.headerChild}`}>
            <CiMail className={`${style.mail}`} />
            <p>Hello@colorlib.com</p>
          </div>
          <div className={`${style.centerLine}`}></div>
          <div>
            <p>Free Shipping for all order of $99</p>
          </div>
          <div className={`${style.sosialIcons}`}>
            <AiFillFacebook />
            <IoLogoWhatsapp />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
        <div className={`${style.TopHeader} container`}></div>
      </div>
    </>
  );
};

export default TopHeader;
