import React from "react";
import Footer from "../../components/home_compo/footer/Footer";
import FAQ from "../../components/home_compo/faq/FAQ";
import Map from "../../components/home_compo/map/Map";
import Industries from "../../components/home_compo/industries/Industries";
import Why from "../../components/home_compo/why_to_choose_us/Why";
import Global from "../../components/home_compo/global_reach/Global";
import News from "../../components/home_compo/news_blog/News";
import Products from "../../components/home_compo/products_marquee/Products";
import Navbar from "../../components/home_compo/navbar/Navbar";
import Contact from "../../components/home_compo/contact_us_button/Contact";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.imageContainer}></div>
        <Global />
        <Why />
        <Products />
        <Industries />
        <News />
        <Map />
        <FAQ />
      </div>
    </>
  );
};

export default Homepage;
