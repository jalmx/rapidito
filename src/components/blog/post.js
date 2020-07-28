import React from "react";
import Layout from "../layout";
import { Parser } from "html-to-react";
import style from "./post.module.scss";

const getHTML = (content) => {
  const htmlInput = content;
  const htmlToReactParser = new Parser();
  return htmlToReactParser.parse(htmlInput);
};

const PostView = (props) => (
  <Layout {...props}>
    <article className={style.post}>
      <h1>{props.location.state.post.title}</h1>
      <img
        src={props.location.state.post.imgUrl}
        alt={props.location.state.post.title}
      />
      <div>{getHTML(props.location.state.post.body)}</div>
    </article>
  </Layout>
);

export default PostView;
