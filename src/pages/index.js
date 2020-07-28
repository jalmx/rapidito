import React from "react";
import Layout from "../components/layout/";
import Banner from '../components/banner/'
import ProductSection from '../components/product/productSection'
import Brands from "../components/brands";
import Contact from "../components/contact";

const Home = (props) => (
  <Layout title={"Home"} {...props}>
    <Banner />
    <ProductSection title="Productos" />
    <Brands title="Marcas" />
    <Contact title="Contactanos" />
  </Layout>
);

export default Home;
