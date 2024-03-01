import React from "react";
import { CiMail } from "react-icons/ci";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import style from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={`${style.footer} d-block d-md-none`}>
        <div className={`${style.header}`}>
          <div>
            <div className={`${style.headerChild}`}>
              <CiMail className={`${style.mail}`} />
              <p>Hello@colorlib.com</p>
            </div>
            <div>
              <p>Free Shipping for all order of $99</p>
            </div>
          </div>
          <div className={`${style.sosialIcons}`}>
            <Link to="https://www.facebook.com/">
              <AiFillFacebook />
            </Link>
            <Link to="https://web.whatsapp.com/">
              <IoLogoWhatsapp />
            </Link>
            <Link to="https://az.linkedin.com/">
              <FaLinkedin />
            </Link>
            <Link to="https://twitter.com/?lang=az">
              <FaTwitter />
            </Link>
          </div>
        </div>
        <div className={`${style.TopHeader} container`}></div>
      </div>
    </>
  );
};

export default Footer;
