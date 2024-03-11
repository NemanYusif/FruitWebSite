import React from "react";
import TopHeader from "../../Components/TopHeader";
import Header from "../../Components/Header";
import BottomHeader from "../../Components/BottomHeader";
import ProductSwiper from "../../Components/ProductSwiper";
import Categories from "../../Components/Categories";
import TopProduct from "../../Components/TopProduct";
import BestValue from "../../Components/BestValues";
import Banner from "../../Components/Banner";
import AddedNewProduct from "../../Components/AddedNewProduct";
import Products from "../../Components/Products";

const Home = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <BottomHeader />
      <ProductSwiper />
      <Categories />
      <TopProduct />
      <BestValue />
      <Banner />
      <AddedNewProduct />
      <Products />
    </>
  );
};

export default Home;
