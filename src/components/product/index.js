import React from "react";
import products from "./products.json";
import Card from "../card/";

const style = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
};

const Product = ({ title }) => (
  <section>
    <h1 className="titleSection">{title}</h1>
    <article style={style}>
      {products.map((product) => (
        <Card key={Math.floor(Math.random() * 1000)} data={product} />
      ))}
    </article>
  </section>
);

export default Product;
