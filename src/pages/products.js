import React from "react";
import Layout from "../components/layout";
import ProductSection from "../components/product/productSection";

const Products = (props) => {
  return (
    <Layout {...props}>
      <section>
        <h1 className="titleSection">Productos</h1>
        <ProductSection {...props} />
      </section>
    </Layout>
  );
};
export default Products;
