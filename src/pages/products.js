import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import ProductSection from "../components/product/productSection";

const Products = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    return () => {};
  }, []);

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
