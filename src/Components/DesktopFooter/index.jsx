import React from "react";
import style from "../DesktopFooter/DesktopFooter.module.css";
import { Link } from "react-router-dom";
const DesktopFooter = () => {
  return (
    <div className={style.desktopFooter}>
      <div className={`container`}>
        <div className={`${style.headerDiv}`}>
          <div className={`${style.siteLogo} d-none d-md-block`}>
            <img src="/FooterLogo/Logo.png" alt="" />
            <p>Address: 60-49 Road 11378 New York</p>
            <p>Phone: +65 11.188.888</p>
            <p>Email: hello@colorlib.com</p>
          </div>
          <div className={style.links}>
            <h3>USEFUL LINK</h3>
            <div className={style.linksFlex}>
              <div className={style.firstLinks}>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/aboutShop">About Our Shop</Link>
                <Link to="/delivery">Delivery infomation</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="siteMap">Our Sitemap</Link>
              </div>
              <div className={style.firstLinks}>
                <Link to="/">HOME</Link>
                <Link to="/product">PRODUCT</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/stores">STORES</Link>
              </div>
            </div>
          </div>

          <div className={style.footer}>
            <h2>Download App</h2>
            <div className={style.footerLogos}>
              <img src="/FooterLogo/AppStore.svg" alt="" />
              <img src="/FooterLogo/PlayMarket.svg" alt="" />
            </div>
            <div className={style.input}>
              <h2>Sign Up for Our Newsletter</h2>
              <div className={style.inbtn}>
                <input type="text" placeholder="Enter Email Address" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
            <div className={style.method}>
              <h2>Payment Method</h2>
              <div className={style.payments}>
                <img src="/FooterLogo/Visa-light.svg" alt="" />
                <img src="/FooterLogo/MasterCard-light.svg" alt="" />
                <img src="/FooterLogo/Maestro-light.svg" alt="" />
                <img src="/FooterLogo/Cirrus-light.svg" alt="" />
                <img src="/FooterLogo/AmericanExpress-light.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.end}>
          <p>
            Copyright ©2021 All rights reserved | This template is made with 💚
            by LOGO
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
