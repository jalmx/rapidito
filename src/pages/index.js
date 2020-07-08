import React from "react";
import Layout from "../components/layout/";
import Banner from '../components/banner/'
import Product from '../components/product'
import Brands from "../components/brands";
import Contact from "../components/contact";
const Home = (props) => (
  <Layout title={"Home"} {...props}>
    <Banner />
    <Product title="Productos" />
    <Brands title="Marcas" />
    <Contact title="contacto" />
  </Layout>
);

export default Home;
