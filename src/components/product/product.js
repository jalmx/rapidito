import React from 'react'
import Layout from "../layout";
import { Parser } from "html-to-react";
import style from "./product.module.scss";

const getHTML = (content) => {
  const htmlInput = content;
  const htmlToReactParser = new Parser();
  return htmlToReactParser.parse(htmlInput);
};

//TODO: @style

const ProductView = (props) => (
  <Layout {...props}>
    <article className={style.post}>
      <h1>{props.location.state.product.title}</h1>
      <img src={props.location.state.product.imgUrl} alt={props.location.state.product.title}/>
      {getHTML(props.location.state.product.body.trim())}
    </article>
  </Layout>
);


export default ProductView
